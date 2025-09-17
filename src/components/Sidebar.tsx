import React from 'react'
import styled, { css } from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  BarChart3, 
  Package, 
  Layers, 
  Users, 
  Zap, 
  Play, 
  TrendingUp,
  Ship,
  Calendar,
  Gift,
  ShoppingCart,
  Wallet,
  X
} from 'lucide-react'
import { useAppStore } from '@/store'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  width: 280px;
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    padding: ${({ theme }) => theme.spacing.md};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const SidebarHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const SidebarTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`

const SidebarSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[800]};
  }
  
  ${({ active, theme }) => active && css`
    background: ${theme.colors.ocean}10;
    color: ${theme.colors.ocean};
    font-weight: ${theme.typography.fontWeight.medium};
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`

const NavText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`

interface NavItemData {
  path: string
  label: string
  icon: React.ReactNode
  persona: 'admin' | 'guest'
}

const navigationItems: NavItemData[] = [
  // Admin items
  { path: '/admin', label: 'Dashboard', icon: <BarChart3 size={20} />, persona: 'admin' },
  { path: '/admin/offers', label: 'Offers', icon: <Package size={20} />, persona: 'admin' },
  { path: '/admin/bundles', label: 'Bundles', icon: <Layers size={20} />, persona: 'admin' },
  { path: '/admin/segments', label: 'Segments', icon: <Users size={20} />, persona: 'admin' },
  { path: '/admin/rules', label: 'Rules', icon: <Zap size={20} />, persona: 'admin' },
  { path: '/admin/simulator', label: 'Simulator', icon: <Play size={20} />, persona: 'admin' },
  { path: '/admin/analytics', label: 'Analytics', icon: <TrendingUp size={20} />, persona: 'admin' },
  
  // Guest items
  { path: '/guest/activity-selection', label: 'My Interests', icon: <Gift size={20} />, persona: 'guest' },
  { path: '/guest/trip-map', label: 'Trip Map', icon: <Ship size={20} />, persona: 'guest' },
  { path: '/guest/onboard-upgrades', label: 'Upgrades', icon: <TrendingUp size={20} />, persona: 'guest' },
  { path: '/guest/cart', label: 'My Trip Plan', icon: <ShoppingCart size={20} />, persona: 'guest' },
  { path: '/guest/gamify', label: 'Rewards', icon: <Gift size={20} />, persona: 'guest' },
  { path: '/guest/wallet', label: 'Wallet', icon: <Wallet size={20} />, persona: 'guest' },
]

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPersona = useAppStore((state) => state.currentPersona)
  
  const filteredItems = navigationItems.filter(item => item.persona === currentPersona)
  
  const handleNavigation = (path: string, label: string) => {
    navigate(path)
    onClose?.()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { 
      page: label.toLowerCase(),
      persona: currentPersona 
    })
  }

  const adminItems = filteredItems.filter(item => item.persona === 'admin')
  const guestItems = filteredItems.filter(item => item.persona === 'guest')

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <SidebarTitle>
          {currentPersona === 'admin' ? 'Admin Studio' : 'Guest Experience'}
        </SidebarTitle>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
      </SidebarHeader>
      
      {currentPersona === 'admin' && (
        <SidebarSection>
          <SectionTitle>Admin Studio</SectionTitle>
          {adminItems.map((item) => (
            <NavItem
              key={item.path}
              active={location.pathname === item.path}
              onClick={() => handleNavigation(item.path, item.label)}
              data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavText>{item.label}</NavText>
            </NavItem>
          ))}
        </SidebarSection>
      )}
      
      {currentPersona === 'guest' && (
        <SidebarSection>
          <SectionTitle>Guest Experience</SectionTitle>
          {guestItems.map((item) => (
            <NavItem
              key={item.path}
              active={location.pathname === item.path}
              onClick={() => handleNavigation(item.path, item.label)}
              data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavText>{item.label}</NavText>
            </NavItem>
          ))}
        </SidebarSection>
      )}
    </SidebarContainer>
  )
}