import React from 'react'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { Card } from '@/components/Card'

const DashboardContainer = styled.div`
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

const WelcomeText = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin: 0 0 ${theme.spacing.sm} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

const ShipName = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0 0 ${theme.spacing.lg} 0;
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  padding: 0 ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`

const StatCard = styled(Card)`
  padding: ${theme.spacing.lg};
  text-align: center;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
`

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  font-weight: ${theme.typography.fontWeight.medium};
`

const NextPortCard = styled(Card)`
  margin: ${theme.spacing.lg} ${theme.spacing.md} 0;
  padding: 0;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
`

const NextPortImage = styled.div`
  height: 120px;
  background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  }
`

const NextPortContent = styled.div`
  padding: ${theme.spacing.lg};
`

const NextPortTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin: 0 0 ${theme.spacing.sm} 0;
`

const NextPortSubtitle = styled.p`
  color: ${theme.colors.gray[600]};
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
`

const WeatherSection = styled.div`
  margin: ${theme.spacing.lg} ${theme.spacing.md} 0;
`

const WeatherCard = styled(Card)`
  padding: ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.ocean} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`

const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`

const WeatherIcon = styled.div`
  font-size: 24px;
`

const WeatherTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin: 0;
`

const WeatherContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Temperature = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
`

const WeatherDetails = styled.div`
  text-align: right;
`

const WeatherCondition = styled.div`
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.xs};
`

const WeatherRecommendation = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.9;
  color: ${theme.colors.sunshine};
`

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <HeroSection>
        <WelcomeText>Welcome aboard!</WelcomeText>
        <ShipName>Royal Caribbean Odyssey</ShipName>
      </HeroSection>
      
      <StatsContainer>
        <StatCard>
          <StatNumber>5</StatNumber>
          <StatLabel>Days Left</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>Barbados</StatNumber>
          <StatLabel>Next Port</StatLabel>
        </StatCard>
      </StatsContainer>
      
      <NextPortCard>
        <NextPortImage />
        <NextPortContent>
          <NextPortTitle>Next Destination</NextPortTitle>
          <NextPortSubtitle>Arriving tomorrow at 8:00 AM</NextPortSubtitle>
        </NextPortContent>
      </NextPortCard>
      
      <WeatherSection>
        <WeatherCard>
          <WeatherHeader>
            <WeatherIcon>🌤️</WeatherIcon>
            <WeatherTitle>Today's Weather - Nassau</WeatherTitle>
          </WeatherHeader>
          <WeatherContent>
            <Temperature>82°F</Temperature>
            <WeatherDetails>
              <WeatherCondition>Sunny & Clear</WeatherCondition>
              <WeatherRecommendation>Perfect for Beach Activities</WeatherRecommendation>
            </WeatherDetails>
          </WeatherContent>
        </WeatherCard>
      </WeatherSection>
    </DashboardContainer>
  )
}