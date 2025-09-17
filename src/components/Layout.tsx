import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { BottomNavigation } from './BottomNavigation'
import { useAppStore } from '@/store'

interface LayoutProps {
  children: React.ReactNode
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

const ContentArea = styled.main<{ sidebarOpen: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.offWhite};
  overflow-y: auto;
  min-height: calc(100vh - 80px);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: ${({ sidebarOpen }) => sidebarOpen ? '280px' : '0'};
    transition: margin-left 0.3s ease;
  }
`

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ visible }) => visible ? 1 : 0};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  
  // Hide sidebar and header for guest pages, show bottom navigation instead
  const isGuestPage = location.pathname.startsWith('/guest') || 
                     location.pathname === '/dashboard' ||
                     location.pathname === '/itinerary' ||
                     location.pathname === '/concierge' ||
                     location.pathname === '/profile'
  
  // Hide admin access from visible navigation
  const isAdminPage = location.pathname.startsWith('/admin')

  const handleOverlayClick = () => {
    setSidebarOpen(false)
  }

  if (isGuestPage) {
    return (
      <LayoutContainer>
        <ContentArea sidebarOpen={false} style={{ padding: 0, minHeight: '100vh' }}>
          {children}
        </ContentArea>
        <BottomNavigation />
      </LayoutContainer>
    )
  }

  return (
    <LayoutContainer>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <MainContainer>
        {!isAdminPage && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
        <Overlay visible={sidebarOpen} onClick={handleOverlayClick} />
        <ContentArea sidebarOpen={sidebarOpen}>
          {children}
        </ContentArea>
      </MainContainer>
    </LayoutContainer>
  )
}