import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { useAppStore } from '@/store'

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.gray[200]};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: ${theme.shadows.lg};
`

const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  
  ${props => props.active && `
    background: ${theme.colors.primary}15;
    color: ${theme.colors.primary};
  `}
  
  &:hover {
    background: ${theme.colors.gray[100]};
  }
`

const NavIcon = styled.div<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => props.active ? theme.colors.primary : theme.colors.gray[500]};
`

const NavLabel = styled.span<{ active?: boolean }>`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${props => props.active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
  color: ${props => props.active ? theme.colors.primary : theme.colors.gray[500]};
`

interface BottomNavigationProps {
  className?: string
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ className }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems } = useAppStore()
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  
  const navItems = [
    { path: '/dashboard', icon: '🚢', label: 'My Cruise' },
    { path: '/guest/trip-map', icon: '📍', label: 'Ports' },
    { path: '/itinerary', icon: '📅', label: 'Itinerary' },
    { path: '/guest/cart', icon: '🛒', label: 'Cart', badge: cartItemCount > 0 ? cartItemCount : undefined },
    { path: '/profile', icon: '👤', label: 'Profile' }
  ]
  
  return (
    <NavContainer className={className}>
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
          style={{ position: 'relative' }}
        >
          <NavIcon active={location.pathname === item.path}>
            {item.icon}
          </NavIcon>
          <NavLabel active={location.pathname === item.path}>
            {item.label}
          </NavLabel>
          {item.badge && (
            <div style={{
              position: 'absolute',
              top: '4px',
              right: '8px',
              background: theme.colors.sunset,
              color: 'white',
              borderRadius: '10px',
              minWidth: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {item.badge}
            </div>
          )}
        </NavItem>
      ))}
    </NavContainer>
  )
}