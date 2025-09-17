import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Star, Clock, Users, MapPin, Check } from 'lucide-react'
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
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
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

const TimerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.sunset};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  animation: pulse 2s infinite;
  margin-bottom: ${theme.spacing.lg};

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.lg};
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

const ActivitiesSection = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

const ActivityCard = styled(Card)<{ featured?: boolean }>`
  padding: 0;
  overflow: hidden;
  border: 2px solid
    ${({ featured, theme }) =>
      featured ? theme.colors.sunset : theme.colors.gray[200]};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`

const ActivityImage = styled.div<{ imageUrl: string }>`
  height: 160px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`

const ActivityContent = styled.div`
  padding: ${theme.spacing.lg};
`

const ActivityTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.sm};
`

const ActivityDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.md};
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
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
`

const FeaturedBadge = styled(Badge)`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  z-index: 2;
`

const CartSummary = styled(Card)`
  position: sticky;
  bottom: ${theme.spacing.lg};
  margin: 0 ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.xl};
  border: 2px solid ${theme.colors.primary};
`

const AddToTripButton = styled(Button)<{ isAdding?: boolean; justAdded?: boolean }>`
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${({ isAdding }) => isAdding && `
    background: ${theme.colors.gray[400]} !important;
    cursor: wait;
    transform: scale(0.95);
  `}
  
  ${({ justAdded }) => justAdded && `
    background: ${theme.colors.success} !important;
    transform: scale(1.05);
    animation: successBounce 0.6s ease-out;
    
    @keyframes successBounce {
      0% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      50% { 
        transform: scale(1.1);
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
      100% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      }
    }
  `}
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const FeedbackToast = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${({ show }) => show ? 'translateY(0)' : 'translateY(-100px)'};
  background: ${theme.colors.success};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  z-index: 1000;
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  box-shadow: ${theme.shadows.lg};
`



export const DestinationActivities: React.FC = () => {
  const navigate = useNavigate()
  const { selectedDestination, selectedActivityTypes, addToCart } = useAppStore()
  const [offers, setOffers] = useState<Offer[]>([])
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(true)
  const [addingToCart, setAddingToCart] = useState<string | null>(null)
  const [justAdded, setJustAdded] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  // Activity images mapping - unique image for each offer
  const activityImages: Record<string, string> = {
    // Specific offer IDs with unique images
    'off_cabana': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Luxury beach cabana
    'off_spa': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Couples spa massage
    'off_wifi': 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Modern tech/wifi
    'off_dine': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Fine dining chef's table
    'off_kidsclub': 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kids playing activities
    'off_excursion_snorkel': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Snorkeling underwater
    'off_shopping': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Luxury shopping
    'off_fitness': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Personal training
    
    // Additional shore excursion activities with unique images
    'cultural-tour-mayan': 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Mayan ruins
    'beach-horseback': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Beach horseback riding
    'catamaran-sail': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Catamaran sailing
    'zip-line-adventure': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Zip lining through jungle
    'cenote-swimming': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cenote cave swimming
    'dolphin-encounter': 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Dolphin swimming
    'fishing-charter': 'https://images.unsplash.com/photo-1445723542262-5c9b906b7b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Deep sea fishing
    'jungle-atv': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // ATV jungle tour
    'sunset-cruise': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Sunset sailing
    'scuba-diving': 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Scuba diving coral reef
    'local-market-tour': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Local market exploration
    'beach-club-vip': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // VIP beach club
    'rum-tasting': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Rum distillery tasting
    'wildlife-sanctuary': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Wildlife sanctuary
    'glass-bottom-boat': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Glass bottom boat tour
    'cooking-class': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Local cooking class
    'helicopter-tour': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Helicopter scenic tour
    'kayak-mangroves': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kayaking through mangroves
    'art-gallery-walk': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Art gallery tour
    'submarine-tour': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Submarine underwater tour
    'golf-course': 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Golf course with ocean view
    'spa-retreat': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Luxury spa retreat
  }

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
    // Set loading state
    setAddingToCart(offer.id)
    
    // Add a small delay for visual feedback
    setTimeout(() => {
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
      
      // Show success state
      setAddingToCart(null)
      setJustAdded(offer.id)
      
      // Show success toast
      setToastMessage(`✨ ${offer.title} added to your trip!`)
      setShowToast(true)
      
      // Clear success state after animation
      setTimeout(() => setJustAdded(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    }, 300)
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
      <FeedbackToast show={showToast}>
        {toastMessage}
      </FeedbackToast>
      
      <HeroSection>
        <BackButton
          variant="ghost"
          onClick={() => navigate('/guest/trip-map')}
          data-testid="back-button"
        >
          <ArrowLeft size={20} />
          Back to Map
        </BackButton>
        
        <TimerBadge>
          🔥 Limited Spots Available - Book Now for Best Prices!
        </TimerBadge>
        
        <HeroTitle>
          <MapPin size={32} />
          {selectedDestination.port}, {selectedDestination.country}
        </HeroTitle>
        
        <HeroSubtitle>
          Exclusive shore excursions curated for your perfect day
        </HeroSubtitle>
        
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

      <ActivitiesSection>
        <SectionTitle>
          🎯 Exclusive Shore Excursions
        </SectionTitle>

        <ActivitiesGrid>
          {offers.map((offer) => {
            const recommended = isRecommended(offer)
            const imageUrl = activityImages[offer.id] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            const isAdding = addingToCart === offer.id
            const hasJustAdded = justAdded === offer.id
            
            return (
              <ActivityCard key={offer.id} featured={recommended}>
                {recommended && (
                  <FeaturedBadge variant="gold" size="sm">
                    ⭐ Recommended
                  </FeaturedBadge>
                )}
                
                <ActivityImage imageUrl={imageUrl} />
                
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
                  
                  <ActivityFooter>
                    <ActivityPrice>${offer.price}</ActivityPrice>
                    <AddToTripButton
                      size="sm"
                      isAdding={isAdding}
                      justAdded={hasJustAdded}
                      onClick={() => !isAdding && handleAddToCart(offer)}
                      data-testid={`add-activity-${offer.id}`}
                      disabled={isAdding}
                    >
                      {isAdding ? (
                        <>
                          <div style={{ 
                            width: '12px', 
                            height: '12px', 
                            border: '2px solid transparent',
                            borderTop: '2px solid white',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite'
                          }} />
                          Adding...
                        </>
                      ) : hasJustAdded ? (
                        <>
                          <Check size={16} />
                          Added!
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          Add to Trip
                        </>
                      )}
                    </AddToTripButton>
                  </ActivityFooter>
                </ActivityContent>
              </ActivityCard>
            )
          })}
        </ActivitiesGrid>
      </ActivitiesSection>
      
      <CartSummary>
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
      </CartSummary>
    </ActivitiesContainer>
  )
}