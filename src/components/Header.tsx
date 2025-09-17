import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { User, ShoppingCart, Menu } from 'lucide-react'
import { Button } from './Button'
import { Badge } from './Badge'
import { Logo } from './Logo'
import { useAppStore } from '@/store'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'

interface HeaderProps {
  onMenuClick?: () => void
}

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
  display: flex;
  align-items: center;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.ocean};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`



const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`

const PersonaSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.ocean};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    
    button {
      font-size: 12px;
      padding: 4px 8px;
      min-height: 32px;
    }
  }
`

const CartIndicator = styled.div`
  position: relative;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.ocean};
  }
`

const CartBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 18px;
  height: 18px;
  padding: 0;
  font-size: 10px;
  transform: translate(25%, -25%);
`

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { currentPersona, setPersona, cartItems, currentPassenger } = useAppStore()
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleLogoClick = () => {
    navigate('/')
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'landing' })
  }

  const handlePersonaSwitch = (persona: 'admin' | 'guest') => {
    setPersona(persona)
    analytics.track(ANALYTICS_EVENTS.PERSONA_SWITCHED, { 
      from: currentPersona, 
      to: persona 
    })
    
    if (persona === 'admin') {
      navigate('/admin')
    } else {
      navigate('/guest/activity-selection')
    }
  }

  const handleCartClick = () => {
    navigate('/guest/cart')
    analytics.track(ANALYTICS_EVENTS.CART_VIEWED, { itemCount: cartItemCount })
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSection>
          <MenuButton onClick={onMenuClick} data-testid="menu-button">
            <Menu size={24} />
          </MenuButton>
          
          <Logo onClick={handleLogoClick} data-testid="logo" size="md" />
        </LeftSection>
        
        <HeaderActions>
          {currentPersona === 'guest' && currentPassenger && (
            <UserInfo>
              <User size={18} />
              <span style={{ fontSize: '14px' }}>{currentPassenger.name.split(' ')[0]}</span>
              <Badge variant="gold" size="sm">
                {currentPassenger.loyaltyTier || 'Member'}
              </Badge>
            </UserInfo>
          )}
          
          {currentPersona === 'guest' && (
            <CartIndicator onClick={handleCartClick} data-testid="cart-button">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <CartBadge variant="gold" size="sm">
                  {cartItemCount}
                </CartBadge>
              )}
            </CartIndicator>
          )}
          
          <PersonaSwitcher>
            <Button
              size="sm"
              variant={currentPersona === 'admin' ? 'primary' : 'ghost'}
              onClick={() => handlePersonaSwitch('admin')}
              data-testid="admin-persona-button"
            >
              Admin
            </Button>
            <Button
              size="sm"
              variant={currentPersona === 'guest' ? 'primary' : 'ghost'}
              onClick={() => handlePersonaSwitch('guest')}
              data-testid="guest-persona-button"
            >
              Guest
            </Button>
          </PersonaSwitcher>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}