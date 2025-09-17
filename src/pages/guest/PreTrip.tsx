import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Ship, Calendar, Users, Crown, Plus, Sparkles } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { mockApi } from '@/lib/mockApi'
import { useAppStore } from '@/store'
import { Passenger, Offer, Bundle, Rule } from '@/types'
import { RuleEngine, createContextFromPassenger } from '@/lib/ruleEngine'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const PreTripContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

const TripInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

const InfoChip = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.ocean}10;
  color: ${({ theme }) => theme.colors.ocean};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`

const OfferCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
`

const OfferImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 160px;
  background: ${({ imageUrl }) => 
    imageUrl 
      ? `url(${imageUrl}) center/cover` 
      : `linear-gradient(135deg, ${({ theme }) => theme.colors.ocean}, ${({ theme }) => theme.colors.secondary})`
  };
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ imageUrl }) => 
      imageUrl 
        ? 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' 
        : 'none'
    };
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

const OfferContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const OfferTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const OfferDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const OfferFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const OfferPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
`

const OfferBadges = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const BundleCard = styled(OfferCard)`
  border: 2px solid ${({ theme }) => theme.colors.gold};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.gold}05);
`

const BundlePricing = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const BundlePrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
`

const ComparePrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-decoration: line-through;
`

const SurpriseButton = styled(Button)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors.teal});
  border: none;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #e6a54a, #0da5a3);
  }
`

export const GuestPreTrip: React.FC = () => {
  const { currentPassenger, setCurrentPassenger, addToCart } = useAppStore()
  const [passengers, setPassengers] = useState<Passenger[]>([])
  const [offers, setOffers] = useState<Offer[]>([])
  const [bundles, setBundles] = useState<Bundle[]>([])
  const [rules, setRules] = useState<Rule[]>([])
  const [promotedOffers, setPromotedOffers] = useState<Offer[]>([])
  const [promotedBundles, setPromotedBundles] = useState<Bundle[]>([])
  const [appliedBadges, setAppliedBadges] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Add offer and bundle images mapping
  const offerImages: Record<string, string> = {
    'spa-package': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'dining-package': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'beverage-package': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'shore-excursion': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'fitness-class': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'entertainment': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'ultimate-bundle': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'family-bundle': 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'romance-bundle': 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const [passengersData, offersData, bundlesData, rulesData] = await Promise.all([
          mockApi.getPassengers(),
          mockApi.getOffers(),
          mockApi.getBundles(),
          mockApi.getRules()
        ])
        
        setPassengers(passengersData)
        setOffers(offersData)
        setBundles(bundlesData)
        setRules(rulesData)
        
        // Set default passenger if none selected
        if (!currentPassenger && passengersData.length > 0) {
          setCurrentPassenger(passengersData[0])
        }
      } catch (error) {
        console.error('Failed to load pre-trip data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'guest_pretrip' })
  }, [currentPassenger, setCurrentPassenger])

  useEffect(() => {
    if (currentPassenger && rules.length > 0) {
      // Create context for rule evaluation
      const context = createContextFromPassenger(
        currentPassenger,
        new Date().toISOString().split('T')[0], // Today's date
        undefined, // No specific port for pre-trip
        'Sunny', // Default weather
        false // Not a sea day
      )

      const ruleEngine = new RuleEngine(rules)
      const result = ruleEngine.evaluate(context)

      // Get promoted offers and bundles
      const promotedOfferDetails = result.promotedOffers
        .map(id => offers.find(o => o.id === id))
        .filter(Boolean) as Offer[]

      const promotedBundleDetails = result.promotedBundles
        .map(id => bundles.find(b => b.id === id))
        .filter(Boolean) as Bundle[]

      setPromotedOffers(promotedOfferDetails)
      setPromotedBundles(promotedBundleDetails)
      setAppliedBadges(result.badges)
    }
  }, [currentPassenger, offers, bundles, rules])

  const handleAddToCart = (item: Offer | Bundle, type: 'offer' | 'bundle') => {
    addToCart({
      id: item.id,
      type,
      quantity: 1,
      price: type === 'bundle' ? (item as Bundle).bundlePrice : (item as Offer).price
    })

    analytics.track(
      type === 'offer' ? ANALYTICS_EVENTS.OFFER_ADDED_TO_CART : ANALYTICS_EVENTS.BUNDLE_ADDED_TO_CART,
      { 
        itemId: item.id, 
        itemTitle: item.title,
        price: type === 'bundle' ? (item as Bundle).bundlePrice : (item as Offer).price
      }
    )
  }

  const handleSurpriseMe = () => {
    analytics.track(ANALYTICS_EVENTS.SURPRISE_ME_CLICKED, { source: 'pretrip' })
    // TODO: Open surprise modal
  }

  if (loading) {
    return <div>Loading your personalized offers...</div>
  }

  if (!currentPassenger) {
    return <div>Please select a passenger to view offers.</div>
  }

  return (
    <PreTripContainer>
      <Header>
        <Title>{t('guest.pretrip.title')}</Title>
        <Subtitle>Personalized for your upcoming cruise</Subtitle>
        
        <TripInfo>
          <InfoChip>
            <Ship size={16} />
            {currentPassenger.ship}
          </InfoChip>
          <InfoChip>
            <Calendar size={16} />
            {currentPassenger.sailingStart} - {currentPassenger.sailingEnd}
          </InfoChip>
          <InfoChip>
            <Users size={16} />
            {currentPassenger.party.adults}A {currentPassenger.party.children}C
          </InfoChip>
          <InfoChip>
            <Crown size={16} />
            {currentPassenger.loyaltyTier || 'Member'}
          </InfoChip>
        </TripInfo>
      </Header>

      {promotedBundles.length > 0 && (
        <Section>
          <SectionHeader>
            <SectionTitle>Recommended Bundles</SectionTitle>
            <SurpriseButton onClick={handleSurpriseMe}>
              <Sparkles size={20} />
              {t('guest.surprise.title')}
            </SurpriseButton>
          </SectionHeader>
          
          <OffersGrid>
            {promotedBundles.map((bundle) => (
              <BundleCard key={bundle.id} hover>
                <OfferBadges>
                  {bundle.badges?.map((badge) => (
                    <Badge key={badge} variant="gold" size="sm">
                      {badge}
                    </Badge>
                  ))}
                  {appliedBadges.map((badge) => (
                    <Badge key={badge} variant="success" size="sm">
                      {badge}
                    </Badge>
                  ))}
                </OfferBadges>
                
                <OfferImage imageUrl={offerImages[bundle.id]}>
                  {!offerImages[bundle.id] && (bundle.media || 'Bundle Package')}
                </OfferImage>
                
                <OfferContent>
                  <OfferTitle>{bundle.title}</OfferTitle>
                  <OfferDescription>{bundle.desc}</OfferDescription>
                </OfferContent>
                
                <OfferFooter>
                  <BundlePricing>
                    <BundlePrice>${bundle.bundlePrice}</BundlePrice>
                    <ComparePrice>${bundle.compareAt}</ComparePrice>
                  </BundlePricing>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(bundle, 'bundle')}
                    data-testid={`add-bundle-${bundle.id}`}
                  >
                    <Plus size={16} />
                    {t('bundle.addToCart')}
                  </Button>
                </OfferFooter>
              </BundleCard>
            ))}
          </OffersGrid>
        </Section>
      )}

      <Section>
        <SectionHeader>
          <SectionTitle>Recommended for You</SectionTitle>
        </SectionHeader>
        
        <OffersGrid>
          {promotedOffers.map((offer) => (
            <OfferCard key={offer.id} hover>
              <OfferBadges>
                {appliedBadges.map((badge) => (
                  <Badge key={badge} variant="success" size="sm">
                    {badge}
                  </Badge>
                ))}
              </OfferBadges>
              
              <OfferImage imageUrl={offerImages[offer.id]}>
                {!offerImages[offer.id] && (offer.media || offer.title)}
              </OfferImage>
              
              <OfferContent>
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferDescription>{offer.desc}</OfferDescription>
              </OfferContent>
              
              <OfferFooter>
                <OfferPrice>${offer.price}</OfferPrice>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(offer, 'offer')}
                  data-testid={`add-offer-${offer.id}`}
                >
                  <Plus size={16} />
                  {t('offer.addToCart')}
                </Button>
              </OfferFooter>
            </OfferCard>
          ))}
        </OffersGrid>
      </Section>

      {offers.filter(o => !promotedOffers.find(p => p.id === o.id)).length > 0 && (
        <Section>
          <SectionHeader>
            <SectionTitle>All Available Offers</SectionTitle>
          </SectionHeader>
          
          <OffersGrid>
            {offers
              .filter(o => !promotedOffers.find(p => p.id === o.id))
              .slice(0, 6)
              .map((offer) => (
                <OfferCard key={offer.id} hover>
                  <OfferImage imageUrl={offerImages[offer.id]}>
                    {!offerImages[offer.id] && (offer.media || offer.title)}
                  </OfferImage>
                  
                  <OfferContent>
                    <OfferTitle>{offer.title}</OfferTitle>
                    <OfferDescription>{offer.desc}</OfferDescription>
                  </OfferContent>
                  
                  <OfferFooter>
                    <OfferPrice>${offer.price}</OfferPrice>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleAddToCart(offer, 'offer')}
                    >
                      <Plus size={16} />
                      Add
                    </Button>
                  </OfferFooter>
                </OfferCard>
              ))}
          </OffersGrid>
        </Section>
      )}
    </PreTripContainer>
  )
}