import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Gift, Star, Trophy, Zap } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { useAppStore } from '@/store'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const GamifyContainer = styled.div`
  max-width: 1000px;
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
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`

const ProgressSection = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const TierInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const TierIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gold}20;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.gold};
`

const TierTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
`

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.teal}, ${({ theme }) => theme.colors.gold});
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease;
`

const ProgressText = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const SpinSection = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const SpinWheel = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${({ theme }) => theme.colors.gold} 0deg 45deg,
    ${({ theme }) => theme.colors.teal} 45deg 90deg,
    ${({ theme }) => theme.colors.ocean} 90deg 135deg,
    ${({ theme }) => theme.colors.success} 135deg 180deg,
    ${({ theme }) => theme.colors.gold} 180deg 225deg,
    ${({ theme }) => theme.colors.teal} 225deg 270deg,
    ${({ theme }) => theme.colors.ocean} 270deg 315deg,
    ${({ theme }) => theme.colors.success} 315deg 360deg
  );
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
    height: 200px;
  }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(1440deg); }
`

const SpinningWheel = styled(SpinWheel)`
  animation: ${spin} 3s ease-out;
`

const WheelCenter = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.navy};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SpinButton = styled(Button)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors.teal});
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #e6a54a, #0da5a3);
  }
`

const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`

const RewardCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`

const RewardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`

const RewardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const RewardDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const rewards = [
  { icon: <Gift size={24} />, title: '5% Discount', description: 'On your next purchase' },
  { icon: <Star size={24} />, title: '10% Discount', description: 'Premium offer discount' },
  { icon: <Trophy size={24} />, title: 'Free Cocktail', description: 'Complimentary welcome drink' },
  { icon: <Zap size={24} />, title: 'Priority Booking', description: 'Skip the line for reservations' },
]

export const GuestGamify: React.FC = () => {
  const { gamification, setLastSpinDate, unlockPerk, addPerk } = useAppStore()
  const [isSpinning, setIsSpinning] = useState(false)
  const [lastReward, setLastReward] = useState<string | null>(null)

  const canSpin = () => {
    if (!gamification.lastSpinDate) return true
    const lastSpin = new Date(gamification.lastSpinDate)
    const today = new Date()
    return lastSpin.toDateString() !== today.toDateString()
  }

  const handleSpin = () => {
    if (!canSpin() || isSpinning) return

    setIsSpinning(true)
    analytics.track(ANALYTICS_EVENTS.SPIN_WHEEL_USED, { tier: gamification.tier })

    setTimeout(() => {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)]
      setLastReward(randomReward.title)
      setLastSpinDate(new Date().toISOString())
      
      // Add perk to wallet
      addPerk({
        id: `perk_${Date.now()}`,
        title: randomReward.title,
        description: randomReward.description,
        status: 'active'
      })

      analytics.track(ANALYTICS_EVENTS.PERK_UNLOCKED, { 
        perk: randomReward.title,
        source: 'spin_wheel'
      })

      setIsSpinning(false)
      alert(`🎉 You won: ${randomReward.title}!`)
    }, 3000)
  }

  const getTierName = (tier: number) => {
    switch (tier) {
      case 1: return 'Explorer'
      case 2: return 'Adventurer'
      case 3: return 'Captain'
      default: return 'Explorer'
    }
  }

  const getTierIcon = (tier: number) => {
    switch (tier) {
      case 1: return <Star size={32} />
      case 2: return <Trophy size={32} />
      case 3: return <Zap size={32} />
      default: return <Star size={32} />
    }
  }

  return (
    <GamifyContainer>
      <Header>
        <Title>{t('guest.gamify.title')}</Title>
        <Subtitle>Earn rewards and unlock exclusive perks</Subtitle>
      </Header>

      <ProgressSection>
        <TierInfo>
          <TierIcon>
            {getTierIcon(gamification.tier)}
          </TierIcon>
          <div>
            <TierTitle>Tier {gamification.tier}: {getTierName(gamification.tier)}</TierTitle>
            <Badge variant="gold" size="sm">
              {gamification.totalPurchases} purchases made
            </Badge>
          </div>
        </TierInfo>

        <ProgressBar>
          <ProgressFill progress={gamification.progress} />
        </ProgressBar>
        
        <ProgressText>
          {gamification.progress}% to next tier
          {gamification.tier < 3 && ` (${100 - gamification.progress}% remaining)`}
        </ProgressText>
      </ProgressSection>

      <SpinSection>
        <h2 style={{ marginBottom: '24px' }}>{t('guest.gamify.spin')}</h2>
        
        {isSpinning ? (
          <SpinningWheel>
            <WheelCenter>🎯</WheelCenter>
          </SpinningWheel>
        ) : (
          <SpinWheel>
            <WheelCenter>🎯</WheelCenter>
          </SpinWheel>
        )}

        <SpinButton
          size="lg"
          disabled={!canSpin() || isSpinning}
          onClick={handleSpin}
          data-testid="spin-wheel-button"
        >
          {isSpinning ? 'Spinning...' : canSpin() ? 'Spin to Win!' : 'Come back tomorrow!'}
        </SpinButton>

        {!canSpin() && !isSpinning && (
          <p style={{ marginTop: '16px', color: '#64748B' }}>
            You've already spun today. Come back tomorrow for another chance!
          </p>
        )}
      </SpinSection>

      <Card padding="lg">
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Possible Rewards</h2>
        <RewardsGrid>
          {rewards.map((reward, index) => (
            <RewardCard key={index}>
              <RewardIcon>{reward.icon}</RewardIcon>
              <RewardTitle>{reward.title}</RewardTitle>
              <RewardDescription>{reward.description}</RewardDescription>
            </RewardCard>
          ))}
        </RewardsGrid>
      </Card>
    </GamifyContainer>
  )
}