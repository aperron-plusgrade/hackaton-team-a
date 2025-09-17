import React from 'react'
import styled from 'styled-components'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { Card } from '@/components/Card'
import { useAppStore } from '@/store'
import { theme } from '@/styles/theme'

const ItineraryContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`

const Header = styled.div`
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

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`

const ItineraryContent = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const DayCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`

const DayTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Event = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const EventTime = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  min-width: 60px;
`

const EventDetails = styled.div`
  flex: 1;
`

const EventTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.navy};
`

const EventLocation = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Itinerary: React.FC = () => {
  const { currentPassenger, cartItems, selectedActivityTypes } = useAppStore()

  if (!currentPassenger) {
    return (
      <ItineraryContainer>
        <Header>
          <Title>Your Itinerary</Title>
          <Subtitle>Loading your cruise schedule...</Subtitle>
        </Header>
      </ItineraryContainer>
    )
  }

  // Generate dynamic activities based on selections and cart items
  const getPersonalizedActivities = (port: string, timeSlot: string) => {
    const activities = []
    
    // Add cart items as booked activities
    const bookedActivities = cartItems.filter(item => item.type === 'offer')
    if (bookedActivities.length > 0 && timeSlot === '10:00 AM') {
      activities.push({
        time: '10:00 AM',
        title: `${bookedActivities[0].id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Experience`,
        location: `${port} - Booked`,
        type: 'booked'
      })
    }
    
    // Add activities based on interests
    if (selectedActivityTypes.includes('relaxation') && timeSlot === '2:00 PM') {
      activities.push({
        time: '2:00 PM',
        title: 'Spa & Wellness Session',
        location: 'Onboard Serenity Spa',
        type: 'wellness'
      })
    }
    
    if (selectedActivityTypes.includes('dining') && timeSlot === '7:00 PM') {
      activities.push({
        time: '7:00 PM',
        title: 'Specialty Dining Experience',
        location: 'Chef\'s Table Restaurant',
        type: 'dining'
      })
    }
    
    return activities
  }

  return (
    <ItineraryContainer>
      <Header>
        <Title>Your Personalized Itinerary</Title>
        <Subtitle>Customized based on your preferences and bookings</Subtitle>
      </Header>

      <ItineraryContent>
      {currentPassenger.itinerary.map((day, index) => (
        <DayCard key={day.date}>
          <DayHeader>
            <Calendar size={20} />
            <DayTitle>
              Day {index + 1} - {new Date(day.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </DayTitle>
          </DayHeader>

          <EventList>
            {/* Fixed arrival/departure times */}
            <Event>
              <EventTime>8:00 AM</EventTime>
              <MapPin size={16} />
              <EventDetails>
                <EventTitle>
                  {day.port === 'At Sea' ? 'Sea Day Activities' : `Arrive in ${day.port}`}
                </EventTitle>
                <EventLocation>
                  {day.port === 'At Sea' ? 'Enjoy onboard experiences' : `${day.port}, ${day.country}`}
                </EventLocation>
              </EventDetails>
            </Event>

            {/* Dynamic personalized activities */}
            {day.port !== 'At Sea' && getPersonalizedActivities(day.port, '10:00 AM').map((activity, idx) => (
              <Event key={idx}>
                <EventTime>{activity.time}</EventTime>
                <Clock size={16} />
                <EventDetails>
                  <EventTitle>{activity.title}</EventTitle>
                  <EventLocation>{activity.location}</EventLocation>
                </EventDetails>
              </Event>
            ))}

            {/* Onboard personalized activities */}
            {getPersonalizedActivities(day.port, '2:00 PM').map((activity, idx) => (
              <Event key={`afternoon-${idx}`}>
                <EventTime>{activity.time}</EventTime>
                <Clock size={16} />
                <EventDetails>
                  <EventTitle>{activity.title}</EventTitle>
                  <EventLocation>{activity.location}</EventLocation>
                </EventDetails>
              </Event>
            ))}

            {getPersonalizedActivities(day.port, '7:00 PM').map((activity, idx) => (
              <Event key={`evening-${idx}`}>
                <EventTime>{activity.time}</EventTime>
                <Clock size={16} />
                <EventDetails>
                  <EventTitle>{activity.title}</EventTitle>
                  <EventLocation>{activity.location}</EventLocation>
                </EventDetails>
              </Event>
            ))}

            {/* Fixed departure times for ports */}
            {day.port !== 'At Sea' && (
              <Event>
                <EventTime>6:00 PM</EventTime>
                <MapPin size={16} />
                <EventDetails>
                  <EventTitle>Depart {day.port}</EventTitle>
                  <EventLocation>All aboard - Next destination</EventLocation>
                </EventDetails>
              </Event>
            )}
          </EventList>
        </DayCard>
      ))}
      </ItineraryContent>
    </ItineraryContainer>
  )
}