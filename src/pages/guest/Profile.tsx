import React from 'react'
import styled from 'styled-components'
import { User, Star, Gift, Settings, CreditCard } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { useAppStore } from '@/store'
import { theme } from '@/styles/theme'

const ProfileContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`

const ProfileContent = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`

const ProfileHeader = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
`

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`

const UserName = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const UserDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const LoyaltyCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.sunset} 0%, ${({ theme }) => theme.colors.accent} 100%);
  color: ${({ theme }) => theme.colors.white};
`

const LoyaltyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const PointsDisplay = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
`

const MenuCard = styled(Card)`
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`

const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary}15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`

const MenuContent = styled.div`
  flex: 1;
`

const MenuTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const MenuDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Profile: React.FC = () => {
  const { currentPassenger, loyaltyPoints } = useAppStore()

  if (!currentPassenger) {
    return (
      <ProfileContainer>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Please sign in to view your profile</h2>
        </div>
      </ProfileContainer>
    )
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar>
          <User size={40} />
        </Avatar>
        <UserName>{currentPassenger.name}</UserName>
        <UserDetails>
          <Badge variant="gold" size="md">
            {currentPassenger.loyaltyTier || 'Gold Member'}
          </Badge>
        </UserDetails>
      </ProfileHeader>

      <ProfileContent>
      <LoyaltyCard>
        <LoyaltyHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} />
            <span>CruiseMate Rewards</span>
          </div>
        </LoyaltyHeader>
        <PointsDisplay>
          {loyaltyPoints.toLocaleString()} Points
        </PointsDisplay>
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '14px' }}>
          Earn points with every purchase and activity booking
        </div>
      </LoyaltyCard>

      <MenuCard>
        <MenuItem>
          <MenuIcon>
            <CreditCard size={20} />
          </MenuIcon>
          <MenuContent>
            <MenuTitle>Payment Methods</MenuTitle>
            <MenuDescription>Manage your cards and payment preferences</MenuDescription>
          </MenuContent>
        </MenuItem>

        <MenuItem>
          <MenuIcon>
            <Gift size={20} />
          </MenuIcon>
          <MenuContent>
            <MenuTitle>Rewards & Offers</MenuTitle>
            <MenuDescription>View available rewards and special offers</MenuDescription>
          </MenuContent>
        </MenuItem>

        <MenuItem>
          <MenuIcon>
            <Settings size={20} />
          </MenuIcon>
          <MenuContent>
            <MenuTitle>Preferences</MenuTitle>
            <MenuDescription>Customize your cruise experience</MenuDescription>
          </MenuContent>
        </MenuItem>
      </MenuCard>

      <Button fullWidth size="lg" variant="outline">
        Sign Out
      </Button>
      </ProfileContent>
    </ProfileContainer>
  )
}