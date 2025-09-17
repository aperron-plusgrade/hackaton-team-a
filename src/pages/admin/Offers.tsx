import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Plus, Edit, Trash2, DollarSign } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { mockApi } from '@/lib/mockApi'
import { Offer } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const OffersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const OfferCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
`

const OfferImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.ocean}, ${({ theme }) => theme.colors.teal});
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const OfferContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const OfferTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const OfferDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
`

const OfferMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const OfferPrice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
`

const OfferTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const OfferActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({ theme }) => theme.colors.gray[500]};
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.gray[500]};
`

export const AdminOffers: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const data = await mockApi.getOffers()
        setOffers(data)
      } catch (error) {
        console.error('Failed to load offers:', error)
      } finally {
        setLoading(false)
      }
    }

    loadOffers()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'admin_offers' })
  }, [])

  const handleCreateOffer = () => {
    // TODO: Open create offer modal/drawer
    analytics.track(ANALYTICS_EVENTS.OFFER_CREATED, { source: 'admin_offers' })
  }

  const handleEditOffer = (offer: Offer) => {
    // TODO: Open edit offer modal/drawer
    analytics.track(ANALYTICS_EVENTS.OFFER_UPDATED, { offerId: offer.id })
  }

  const handleDeleteOffer = async (offer: Offer) => {
    if (window.confirm(`Are you sure you want to delete "${offer.title}"?`)) {
      try {
        await mockApi.deleteOffer(offer.id)
        setOffers(offers.filter(o => o.id !== offer.id))
        analytics.track(ANALYTICS_EVENTS.OFFER_DELETED, { offerId: offer.id })
      } catch (error) {
        console.error('Failed to delete offer:', error)
      }
    }
  }

  if (loading) {
    return (
      <OffersContainer>
        <LoadingState>Loading offers...</LoadingState>
      </OffersContainer>
    )
  }

  return (
    <OffersContainer>
      <Header>
        <Title>{t('admin.offers.title')}</Title>
        <Button onClick={handleCreateOffer} data-testid="create-offer-button">
          <Plus size={20} />
          {t('admin.offers.create')}
        </Button>
      </Header>

      {offers.length === 0 ? (
        <EmptyState>
          <h3>No offers created yet</h3>
          <p>Create your first offer to get started with upselling.</p>
          <Button onClick={handleCreateOffer} style={{ marginTop: '16px' }}>
            <Plus size={20} />
            Create First Offer
          </Button>
        </EmptyState>
      ) : (
        <OffersGrid>
          {offers.map((offer) => (
            <OfferCard key={offer.id} hover data-testid={`offer-card-${offer.id}`}>
              <OfferImage>
                {offer.media || 'No Image'}
              </OfferImage>
              
              <OfferContent>
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferDescription>{offer.desc}</OfferDescription>
                
                <OfferMeta>
                  <OfferPrice>
                    <DollarSign size={20} />
                    {offer.price}
                  </OfferPrice>
                  <Badge variant="secondary" size="sm">
                    {offer.type}
                  </Badge>
                </OfferMeta>
                
                <OfferTags>
                  {offer.tags.map((tag) => (
                    <Badge key={tag} variant="primary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </OfferTags>
              </OfferContent>
              
              <OfferActions>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditOffer(offer)}
                  data-testid={`edit-offer-${offer.id}`}
                >
                  <Edit size={16} />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDeleteOffer(offer)}
                  data-testid={`delete-offer-${offer.id}`}
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </OfferActions>
            </OfferCard>
          ))}
        </OffersGrid>
      )}
    </OffersContainer>
  )
}