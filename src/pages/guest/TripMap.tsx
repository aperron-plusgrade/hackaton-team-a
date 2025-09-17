import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Thermometer, Wind, ShoppingCart } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Logo } from '@/components/Logo'
import { useAppStore } from '@/store'
import { mockApi } from '@/lib/mockApi'
import { Weather, Offer } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { theme } from '@/styles/theme'

const MapContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`

const Header = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing.xl} ${theme.spacing.md};
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

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SalesMessage = styled.div`
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

const MapArea = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const RouteMap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`

const DestinationCard = styled(Card)<{ visited?: boolean }>`
  padding: 0;
  cursor: pointer;
  position: relative;
  background: ${({ visited, theme }) => 
    visited ? `${theme.colors.success}10` : theme.colors.white};
  border: 2px solid ${({ visited, theme }) => 
    visited ? theme.colors.success : theme.colors.primary};
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

const DestinationImage = styled.div<{ imageUrl: string }>`
  height: 120px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  }
`

const DestinationContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const SalesCallout = styled.div`
  background: ${({ theme }) => theme.colors.sunset};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const DestinationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const DestinationName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const DestinationDate = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`

const ActivityCount = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const VisitedBadge = styled(Badge)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
`

const ShipIcon = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`

const ContinueSection = styled.div`
  position: sticky;
  bottom: ${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const ContinueCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const ContinueTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ContinueSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const getWeatherEmoji = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny': return '☀️'
    case 'partly cloudy': return '⛅'
    case 'cloudy': return '☁️'
    case 'showers': return '🌦️'
    case 'rain': return '🌧️'
    default: return '☀️'
  }
}

export const TripMap: React.FC = () => {
  const navigate = useNavigate()
  const { currentPassenger, selectedActivityTypes, setSelectedDestination } = useAppStore()
  const [weather, setWeather] = useState<Weather[]>([])
  const [offers, setOffers] = useState<Offer[]>([])
  const [visitedDestinations, setVisitedDestinations] = useState<string[]>([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const [weatherData, offersData] = await Promise.all([
          mockApi.getWeather(),
          mockApi.getOffers()
        ])
        setWeather(weatherData)
        setOffers(offersData)
      } catch (error) {
        console.error('Failed to load trip map data:', error)
      }
    }

    loadData()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'trip_map' })
  }, [])

  const handleDestinationClick = (destination: any) => {
    setSelectedDestination(destination)
    setVisitedDestinations(prev => [...new Set([...prev, destination.port])])
    
    analytics.track('destination_selected', {
      port: destination.port,
      country: destination.country,
      date: destination.date
    })
    
    navigate('/guest/destination-activities')
  }

  const getDestinationWeather = (date: string, port: string) => {
    return weather.find(w => w.date === date && w.port === port)
  }

  const getActivityCount = (port: string) => {
    // Mock activity count based on selected activity types
    return Math.floor(Math.random() * 8) + 3
  }

  if (!currentPassenger) {
    return <div>Loading your trip...</div>
  }

  const getDestinationImage = (port: string) => {
    const images = {
      'Nassau': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'Cozumel': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'Costa Maya': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'Key West': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'Miami': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
    return images[port as keyof typeof images] || images.Nassau
  }

  return (
    <MapContainer>
      <Header>
        <SalesMessage>
          🔥 Book Now - Limited Shore Excursion Spots Available!
        </SalesMessage>
        <Title>Your Shore Excursion Destinations</Title>
        <Subtitle>
          Discover exclusive activities at each port - book early for the best deals!
        </Subtitle>
      </Header>

      <MapArea>
        <RouteMap>
          {currentPassenger.itinerary.map((destination, index) => {
            const destinationWeather = getDestinationWeather(destination.date, destination.port)
            const activityCount = getActivityCount(destination.port)
            const isVisited = visitedDestinations.includes(destination.port)
            
            // Skip "At Sea" days for shore excursions
            if (destination.port === 'At Sea') return null
            
            return (
              <DestinationCard
                key={`${destination.port}-${destination.date}`}
                visited={isVisited}
                onClick={() => handleDestinationClick(destination)}
                data-testid={`destination-${destination.port}`}
              >
                {isVisited && (
                  <VisitedBadge variant="success" size="sm">
                    Booked ✓
                  </VisitedBadge>
                )}
                
                <DestinationImage imageUrl={getDestinationImage(destination.port)} />
                
                <DestinationContent>
                  <SalesCallout>
                    Early Bird Special - Save 20%!
                  </SalesCallout>
                  
                  <DestinationHeader>
                    <DestinationName>
                      <MapPin size={20} />
                      {destination.port}
                    </DestinationName>
                  </DestinationHeader>
                  
                  <DestinationDate>
                    <Calendar size={16} />
                    {new Date(destination.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </DestinationDate>
                  
                  {destinationWeather && (
                    <WeatherInfo>
                      <WeatherItem>
                        {getWeatherEmoji(destinationWeather.condition)}
                        {destinationWeather.condition}
                      </WeatherItem>
                      <WeatherItem>
                        <Thermometer size={16} />
                        {destinationWeather.tempC}°C
                      </WeatherItem>
                    </WeatherInfo>
                  )}
                  
                  <ActivityCount>
                    🎯 {activityCount} exclusive excursions available
                  </ActivityCount>
                  
                  <Button size="sm" fullWidth>
                    Book Excursions - {destination.port}
                  </Button>
                </DestinationContent>
              </DestinationCard>
            )
          })}
        </RouteMap>
        
        <ShipIcon>
          <Logo size="md" hideText />
        </ShipIcon>
      </MapArea>

      <ContinueSection>
        <ContinueCard>
          <ContinueTitle>Ready to Complete Your Cruise Package?</ContinueTitle>
          <ContinueSubtitle>
            You've selected amazing upgrades! Complete your booking to secure these exclusive deals.
          </ContinueSubtitle>
          <Button
            size="lg"
            fullWidth
            onClick={() => navigate('/guest/cart')}
            data-testid="view-cart-button"
          >
            <ShoppingCart size={20} />
            Complete My Booking
          </Button>
        </ContinueCard>
      </ContinueSection>
    </MapContainer>
  )
}