import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Star, Clock, Users, MapPin } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { useAppStore } from '@/store'
import { mockApi } from '@/lib/mockApi'
import { Offer, Weather } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { theme } from '@/styles/theme'

const ActivitiesContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.2;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`

const BackButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.white};
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const SalesAlert = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`

const DestinationTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`

const DestinationInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`

const InfoChip = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const ActivityCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

const ActivityImage = styled.div<{ color?: string }>`
  width: 100%;
  height: 160px;
  background: ${({ color, theme }) => 
    color ? `linear-gradient(135deg, ${color}40, ${color}60)` : 
    `linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.secondary}60)`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  }
`

const ActivityContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ActivityTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ActivityDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
`

const ActivityMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

const ActivityFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ActivityPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`

const RecommendedBadge = styled(Badge)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
`

const getActivityEmoji = (type: string) => {
  const emojiMap: Record<string, string> = {
    'experience': '🏄‍♂️',
    'spa': '🧘‍♀️',
    'dining': '🍽️',
    'excursion': '🗺️',
    'shopping': '🛍️',
    'fitness': '💪',
    'kids': '👨‍👩‍👧‍👦',
    'entertainment': '🎭'
  }
  return emojiMap[type] || '🎯'
}

const getActivityColor = (type: string) => {
  const colorMap: Record<string, string> = {
    'experience': '#FF6B6B',
    'spa': '#4ECDC4',
    'dining': '#F38BA8',
    'excursion': '#45B7D1',
    'shopping': '#E67E22',
    'fitness': '#06D6A0',
    'kids': '#FFE66D',
    'entertainment': '#9B59B6'
  }
  return colorMap[type] || '#FF6B6B'
}

export const DestinationActivities: React.FC = () => {
  const navigate = useNavigate()
  const { selectedDestination, selectedActivityTypes, addToCart } = useAppStore()
  const [offers, setOffers] = useState<Offer[]>([])
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [offersData, weatherData] = await Promise.all([
          mockApi.getOffers(),
          mockApi.getWeather()
        ])
        
        setOffers(offersData)
        
        if (selectedDestination) {
          const destinationWeather = weatherData.find(w => 
            w.date === selectedDestination.date && w.port === selectedDestination.port
          )
          setWeather(destinationWeather || null)
        }
      } catch (error) {
        console.error('Failed to load destination activities:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { 
      page: 'destination_activities',
      destination: selectedDestination?.port 
    })
  }, [selectedDestination])

  const handleAddToCart = (offer: Offer) => {
    addToCart({
      id: offer.id,
      type: 'offer',
      quantity: 1,
      price: offer.price
    })

    analytics.track(ANALYTICS_EVENTS.OFFER_ADDED_TO_CART, {
      offerId: offer.id,
      offerTitle: offer.title,
      price: offer.price,
      destination: selectedDestination?.port
    })
  }

  const isRecommended = (offer: Offer) => {
    // Check if offer matches selected activity types
    return selectedActivityTypes?.some(type => 
      offer.tags.some(tag => tag.includes(type))
    ) || false
  }

  if (!selectedDestination) {
    navigate('/guest/trip-map')
    return null
  }

  if (loading) {
    return <div>Loading activities...</div>
  }

  return (
    <ActivitiesContainer>
      <HeroSection>
        <BackButton
          variant="ghost"
          onClick={() => navigate('/guest/trip-map')}
          data-testid="back-button"
        >
          <ArrowLeft size={20} />
          Back to Map
        </BackButton>
        
        <SalesAlert>
          🔥 Limited Spots Available - Book Now for Best Prices!
        </SalesAlert>
        
        <DestinationTitle style={{ color: 'white', marginBottom: '16px' }}>
          <MapPin size={32} />
          {selectedDestination.port}, {selectedDestination.country}
        </DestinationTitle>
        
        <DestinationInfo>
          <InfoChip>
            📅 {new Date(selectedDestination.date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </InfoChip>
          
          {weather && (
            <>
              <InfoChip>
                🌤️ {weather.condition} {weather.tempC}°C
              </InfoChip>
              <InfoChip>
                💨 Wind {weather.windKph} km/h
              </InfoChip>
            </>
          )}
        </DestinationInfo>
      </HeroSection>

      <div style={{ padding: '24px 16px' }}>
        <SectionTitle>
          🎯 Exclusive Shore Excursions
        </SectionTitle>

      <ActivitiesGrid>
        {offers.map((offer) => {
          const recommended = isRecommended(offer)
          const activityColor = getActivityColor(offer.type)
          
          return (
            <ActivityCard key={offer.id} hover>
              {recommended && (
                <RecommendedBadge variant="success" size="sm">
                  ⭐ Recommended
                </RecommendedBadge>
              )}
              
              <ActivityImage color={activityColor}>
                {getActivityEmoji(offer.type)}
              </ActivityImage>
              
              <ActivityContent>
                <ActivityTitle>{offer.title}</ActivityTitle>
                <ActivityDescription>{offer.desc}</ActivityDescription>
                
                <ActivityMeta>
                  <MetaItem>
                    <Clock size={16} />
                    2-4 hours
                  </MetaItem>
                  <MetaItem>
                    <Users size={16} />
                    All ages
                  </MetaItem>
                  <MetaItem>
                    <Star size={16} />
                    4.8 rating
                  </MetaItem>
                </ActivityMeta>
              </ActivityContent>
              
              <ActivityFooter>
                <ActivityPrice>${offer.price}</ActivityPrice>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(offer)}
                  data-testid={`add-activity-${offer.id}`}
                >
                  <Plus size={16} />
                  Add to Trip
                </Button>
              </ActivityFooter>
            </ActivityCard>
          )
        })}
      </ActivitiesGrid>
      
      <div style={{ position: 'sticky', bottom: '16px', padding: '0 16px' }}>
        <div style={{ padding: '16px', background: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '2px solid #0EA5E9', borderRadius: '12px' }}>
          <Card>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#0F172A', fontSize: '18px', fontWeight: '600' }}>
              Ready to Book Your Adventures?
            </h3>
            <p style={{ margin: 0, color: '#64748B', fontSize: '14px' }}>
              Secure your spots now - popular excursions fill up fast!
            </p>
          </div>
          <Button
            fullWidth
            size="lg"
            onClick={() => navigate('/guest/cart')}
          >
            Complete My Booking
          </Button>
          </Card>
        </div>
      </div>
      </div>
    </ActivitiesContainer>
  )
}