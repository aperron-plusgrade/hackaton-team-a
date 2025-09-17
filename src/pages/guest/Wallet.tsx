import React from 'react'
import styled from 'styled-components'
import { Gift, Clock, CheckCircle, XCircle, QrCode, Calendar, Ship } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { useAppStore } from '@/store'
import { theme } from '@/styles/theme'
import { t } from '@/lib/i18n'

const WalletContainer = styled.div`
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

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`

const ContentSection = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const Section = styled.div`
  margin-bottom: ${theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.navy};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`

const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

const PerkCard = styled(Card)<{ status: string }>`
  padding: ${theme.spacing.lg};
  position: relative;
  opacity: ${({ status }) => status === 'expired' ? 0.6 : 1};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`

const PerkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const PerkInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const PerkIcon = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ status, theme }) => {
    switch (status) {
      case 'active': return theme.colors.success + '20'
      case 'used': return theme.colors.gray[200]
      case 'expired': return theme.colors.error + '20'
      default: return theme.colors.gray[200]
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'active': return theme.colors.success
      case 'used': return theme.colors.gray[500]
      case 'expired': return theme.colors.error
      default: return theme.colors.gray[500]
    }
  }};
`

const PerkDetails = styled.div``

const PerkTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const PerkDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const QRCodePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const ReservationCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const ReservationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ReservationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.ocean}20;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.ocean};
`

const ReservationDetails = styled.div``

const ReservationTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ReservationInfo = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.gray[500]};
`

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <CheckCircle size={24} />
    case 'used':
      return <Clock size={24} />
    case 'expired':
      return <XCircle size={24} />
    default:
      return <Gift size={24} />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge variant="success" size="sm">Active</Badge>
    case 'used':
      return <Badge variant="secondary" size="sm">Used</Badge>
    case 'expired':
      return <Badge variant="error" size="sm">{t('perk.expired')}</Badge>
    default:
      return <Badge variant="secondary" size="sm">Unknown</Badge>
  }
}

// Mock reservations data
const mockReservations = [
  {
    id: 'res_1',
    title: 'Chef\'s Table Dinner',
    date: '2025-11-05',
    time: '7:00 PM',
    location: 'Deck 12 - Specialty Restaurant'
  },
  {
    id: 'res_2',
    title: 'Couples Massage',
    date: '2025-11-06',
    time: '2:00 PM',
    location: 'Deck 9 - Spa & Wellness'
  }
]

export const GuestWallet: React.FC = () => {
  const { perks, currentPassenger } = useAppStore()

  const activePerks = perks.filter(p => p.status === 'active')
  const usedPerks = perks.filter(p => p.status === 'used')
  const expiredPerks = perks.filter(p => p.status === 'expired')

  return (
    <WalletContainer>
      <HeroSection>
        <Title>{t('guest.wallet.title')}</Title>
        <Subtitle>Your perks, vouchers, and upcoming reservations</Subtitle>
      </HeroSection>

      <ContentSection>

      {/* Active Perks */}
      <Section>
        <SectionTitle>Active Perks ({activePerks.length})</SectionTitle>
        {activePerks.length > 0 ? (
          <PerksGrid>
            {activePerks.map((perk) => (
              <PerkCard key={perk.id} status={perk.status} hover>
                <PerkHeader>
                  <PerkInfo>
                    <PerkIcon status={perk.status}>
                      {getStatusIcon(perk.status)}
                    </PerkIcon>
                    <PerkDetails>
                      <PerkTitle>{perk.title}</PerkTitle>
                      <PerkDescription>{perk.description}</PerkDescription>
                    </PerkDetails>
                  </PerkInfo>
                  {getStatusBadge(perk.status)}
                </PerkHeader>
                
                <QRCodePlaceholder>
                  <QrCode size={32} />
                </QRCodePlaceholder>
              </PerkCard>
            ))}
          </PerksGrid>
        ) : (
          <EmptyState>
            <Gift size={48} style={{ marginBottom: '16px' }} />
            <h3>No active perks</h3>
            <p>Spin the wheel or make purchases to earn perks!</p>
          </EmptyState>
        )}
      </Section>

      {/* Upcoming Reservations */}
      <Section>
        <SectionTitle>Upcoming Reservations</SectionTitle>
        <PerksGrid>
          {mockReservations.map((reservation) => (
            <ReservationCard key={reservation.id} hover>
              <ReservationHeader>
                <ReservationIcon>
                  <Calendar size={24} />
                </ReservationIcon>
                <ReservationDetails>
                  <ReservationTitle>{reservation.title}</ReservationTitle>
                  <ReservationInfo>
                    {reservation.date} at {reservation.time}
                    <br />
                    {reservation.location}
                  </ReservationInfo>
                </ReservationDetails>
              </ReservationHeader>
              
              <QRCodePlaceholder>
                <QrCode size={32} />
              </QRCodePlaceholder>
            </ReservationCard>
          ))}
        </PerksGrid>
      </Section>

      {/* Trip Summary */}
      {currentPassenger && (
        <Section>
          <SectionTitle>Trip Summary</SectionTitle>
          <ReservationCard>
            <ReservationHeader>
              <ReservationIcon>
                <Ship size={24} />
              </ReservationIcon>
              <ReservationDetails>
                <ReservationTitle>{currentPassenger.ship}</ReservationTitle>
                <ReservationInfo>
                  {currentPassenger.sailingStart} - {currentPassenger.sailingEnd}
                  <br />
                  {currentPassenger.cabinClass} Cabin • {currentPassenger.loyaltyTier || 'Member'}
                  <br />
                  Party: {currentPassenger.party.adults} Adults, {currentPassenger.party.children} Children
                </ReservationInfo>
              </ReservationDetails>
            </ReservationHeader>
          </ReservationCard>
        </Section>
      )}

      {/* Used/Expired Perks */}
      {(usedPerks.length > 0 || expiredPerks.length > 0) && (
        <Section>
          <SectionTitle>Perk History</SectionTitle>
          <PerksGrid>
            {[...usedPerks, ...expiredPerks].map((perk) => (
              <PerkCard key={perk.id} status={perk.status}>
                <PerkHeader>
                  <PerkInfo>
                    <PerkIcon status={perk.status}>
                      {getStatusIcon(perk.status)}
                    </PerkIcon>
                    <PerkDetails>
                      <PerkTitle>{perk.title}</PerkTitle>
                      <PerkDescription>{perk.description}</PerkDescription>
                    </PerkDetails>
                  </PerkInfo>
                  {getStatusBadge(perk.status)}
                </PerkHeader>
              </PerkCard>
            ))}
          </PerksGrid>
        </Section>
      )}
      </ContentSection>
    </WalletContainer>
  )
}