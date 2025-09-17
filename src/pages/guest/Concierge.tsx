import React from 'react'
import styled from 'styled-components'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { theme } from '@/styles/theme'

const ConciergeContainer = styled.div`
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

const ConciergeContent = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`

const ServiceCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const HoursCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.sunset} 0%, ${({ theme }) => theme.colors.accent} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const Concierge: React.FC = () => {
  return (
    <ConciergeContainer>
      <Header>
        <Title>Premium Concierge Service</Title>
        <Subtitle>Dedicated assistance for your luxury cruise experience</Subtitle>
      </Header>

      <ConciergeContent>
      <HoursCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
          <Clock size={20} />
          <strong>Available 24/7</strong>
        </div>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Our concierge team is always ready to assist you
        </p>
      </HoursCard>

      <ServiceCard>
        <ServiceIcon>
          <MessageCircle size={24} />
        </ServiceIcon>
        <ServiceTitle>Live Chat</ServiceTitle>
        <ServiceDescription>
          Get instant help with dining reservations, activity bookings, and general questions
        </ServiceDescription>
        <Button size="lg" fullWidth>
          Start Chat
        </Button>
      </ServiceCard>

      <ServiceCard>
        <ServiceIcon>
          <Phone size={24} />
        </ServiceIcon>
        <ServiceTitle>Call Concierge</ServiceTitle>
        <ServiceDescription>
          Speak directly with our concierge team for personalized assistance
        </ServiceDescription>
        <Button size="lg" fullWidth variant="outline">
          Call Now - Ext. 1234
        </Button>
      </ServiceCard>

      <ServiceCard>
        <ServiceIcon>
          <Mail size={24} />
        </ServiceIcon>
        <ServiceTitle>Special Requests</ServiceTitle>
        <ServiceDescription>
          Submit special requests for celebrations, dietary needs, or accessibility requirements
        </ServiceDescription>
        <Button size="lg" fullWidth variant="outline">
          Submit Request
        </Button>
      </ServiceCard>
      </ConciergeContent>
    </ConciergeContainer>
  )
}