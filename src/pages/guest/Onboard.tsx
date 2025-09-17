import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Calendar, MapPin, Cloud, Sun, CloudRain, Plus } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { useAppStore } from '@/store'
import { mockApi } from '@/lib/mockApi'
import { Offer, Bundle, Weather, Rule } from '@/types'
import { RuleEngine, createContextFromPassenger } from '@/lib/ruleEngine'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'
import { theme } from '@/styles/theme'

const OnboardContainer = styled.div`
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

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

const DateTabs = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${theme.spacing.sm};
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const DateTab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${({ active }) => active ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'};
  border-radius: ${theme.borderRadius.md};
  background: ${({ active }) => active ? 'rgba(255,255,255,0.2)' : 'transparent'};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 48px;
  font-size: ${theme.typography.fontSize.sm};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.base};
  }
  
  @media (hover: hover) {
    &:hover {
      background: rgba(255,255,255,0.2);
    }
  }
`

const DayInfo = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const DayTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const WeatherChip = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.teal}10;
  color: ${({ theme }) => theme.colors.teal};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const TimedDeal = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}10, ${({ theme }) => theme.colors.white});
  border: 2px solid ${({ theme }) => theme.colors.gold};
`

const DealHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const DealTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const Countdown = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const ContentSection = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const OffersSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`

const SectionTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.navy};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

const OfferCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`

const OfferImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 160px;
  background: ${({ imageUrl }) => 
    imageUrl 
      ? `url(${imageUrl}) center/cover` 
      : `linear-gradient(135deg, ${theme.colors.ocean}, ${theme.colors.secondary})`
  };
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.sm};
  text-align: center;

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
  }
`

const OfferContent = styled.div`
  padding: ${theme.spacing.lg};
`

const OfferTitle = styled.h4`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.sm};
`

const OfferDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.md};
`

const OfferFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const OfferPrice = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
`

const OfferBadges = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun size={16} />
    case 'cloudy':
    case 'partly cloudy':
      return <Cloud size={16} />
    case 'showers':
    case 'rain':
      return <CloudRain size={16} />
    default:
      return <Sun size={16} />
  }
}

export const GuestOnboard: React.FC = () => {
  const { currentPassenger, addToCart } = useAppStore()
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [weather, setWeather] = useState<Weather[]>([])
  const [offers, setOffers] = useState<Offer[]>([])
  const [bundles, setBundles] = useState<Bundle[]>([])
  const [rules, setRules] = useState<Rule[]>([])
  const [promotedOffers, setPromotedOffers] = useState<Offer[]>([])
  const [appliedBadges, setAppliedBadges] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [weatherData, offersData, bundlesData, rulesData] = await Promise.all([
          mockApi.getWeather(),
          mockApi.getOffers(),
          mockApi.getBundles(),
          mockApi.getRules()
        ])
        
        setWeather(weatherData)
        setOffers(offersData)
        setBundles(bundlesData)
        setRules(rulesData)
        
        // Set default date to today or first itinerary item
        if (currentPassenger?.itinerary.length) {
          setSelectedDate(currentPassenger.itinerary[0].date)
        }
      } catch (error) {
        console.error('Failed to load onboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'guest_onboard' })
  }, [currentPassenger])

  useEffect(() => {
    if (currentPassenger && selectedDate && rules.length > 0) {
      const itineraryItem = currentPassenger.itinerary.find(i => i.date === selectedDate)
      const weatherCondition = weather.find(w => w.date === selectedDate && w.port === itineraryItem?.port)?.condition || 'Sunny'
      
      const context = createContextFromPassenger(
        currentPassenger,
        selectedDate,
        itineraryItem?.port,
        weatherCondition,
        itineraryItem?.port === 'At Sea'
      )

      const ruleEngine = new RuleEngine(rules)
      const result = ruleEngine.evaluate(context)

      const promotedOfferDetails = result.promotedOffers
        .map(id => offers.find(o => o.id === id))
        .filter(Boolean) as Offer[]

      setPromotedOffers(promotedOfferDetails)
      setAppliedBadges(result.badges)
    }
  }, [currentPassenger, selectedDate, weather, offers, rules])

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
      source: 'onboard'
    })
  }

  if (loading || !currentPassenger) {
    return <div>Loading today's offers...</div>
  }

  const selectedItineraryItem = currentPassenger.itinerary.find(i => i.date === selectedDate)
  const selectedWeather = weather.find(w => w.date === selectedDate && w.port === selectedItineraryItem?.port)

  // Add offer images mapping
  const offerImages: Record<string, string> = {
    'spa-package': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'dining-package': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'beverage-package': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'shore-excursion': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'fitness-class': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'entertainment': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }

  return (
    <OnboardContainer>
      <HeroSection>
        <Title>{t('guest.onboard.title')}</Title>
        
        <DateTabs>
          {currentPassenger.itinerary.map((item) => (
            <DateTab
              key={item.date}
              active={selectedDate === item.date}
              onClick={() => setSelectedDate(item.date)}
            >
              {new Date(item.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
              <br />
              <small>{item.port}</small>
            </DateTab>
          ))}
        </DateTabs>
      </HeroSection>

      <ContentSection>

        {selectedItineraryItem && (
          <DayInfo>
            <DayHeader>
              <DayTitle>
                <MapPin size={20} style={{ marginRight: '8px' }} />
                {selectedItineraryItem.port}, {selectedItineraryItem.country}
              </DayTitle>
              
              {selectedWeather && (
                <WeatherChip>
                  {getWeatherIcon(selectedWeather.condition)}
                  {selectedWeather.condition} {selectedWeather.tempC}°C
                </WeatherChip>
              )}
            </DayHeader>
          </DayInfo>
        )}

        {/* Timed Deal Example */}
        <TimedDeal>
          <DealHeader>
            <DealTitle>⚡ Flash Deal - 30% Off Spa Services</DealTitle>
            <Countdown>Ends in 2h 15m</Countdown>
          </DealHeader>
          <p>Limited time offer for today only! Book your relaxation session now.</p>
        </TimedDeal>

        {promotedOffers.length > 0 && (
          <OffersSection>
            <SectionTitle>Perfect for Today</SectionTitle>
            <OffersGrid>
              {promotedOffers.map((offer) => (
                <OfferCard key={offer.id}>
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
                    
                    <OfferFooter>
                      <OfferPrice>${offer.price}</OfferPrice>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(offer)}
                        data-testid={`add-offer-${offer.id}`}
                      >
                        <Plus size={16} />
                        Add
                      </Button>
                    </OfferFooter>
                  </OfferContent>
                </OfferCard>
              ))}
            </OffersGrid>
          </OffersSection>
        )}

        <OffersSection>
          <SectionTitle>All Available Today</SectionTitle>
          <OffersGrid>
            {offers
              .filter(o => !promotedOffers.find(p => p.id === o.id))
              .slice(0, 4)
              .map((offer) => (
                <OfferCard key={offer.id}>
                  <OfferImage imageUrl={offerImages[offer.id]}>
                    {!offerImages[offer.id] && (offer.media || offer.title)}
                  </OfferImage>
                  
                  <OfferContent>
                    <OfferTitle>{offer.title}</OfferTitle>
                    <OfferDescription>{offer.desc}</OfferDescription>
                    
                    <OfferFooter>
                      <OfferPrice>${offer.price}</OfferPrice>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleAddToCart(offer)}
                      >
                        <Plus size={16} />
                        Add
                      </Button>
                    </OfferFooter>
                  </OfferContent>
                </OfferCard>
              ))}
          </OffersGrid>
        </OffersSection>
      </ContentSection>
    </OnboardContainer>
  )
}