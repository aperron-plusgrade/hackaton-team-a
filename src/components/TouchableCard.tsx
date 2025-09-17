import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface TouchableCardProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  'data-testid'?: string
}

const TouchableCardBase = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  /* Desktop hover effects */
  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.md};
      transform: translateY(-2px);
    }
  }
  
  /* Mobile touch effects */
  @media (hover: none) {
    -webkit-tap-highlight-color: transparent;
    
    &:active {
      box-shadow: ${({ theme }) => theme.shadows.lg};
      transform: scale(0.98);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.colors.ocean}05;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    
    &:active::before {
      opacity: 1;
    }
  }
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ocean};
    outline-offset: 2px;
  }
`

export const TouchableCard: React.FC<TouchableCardProps> = ({
  children,
  onClick,
  className,
  'data-testid': testId,
  ...props
}) => {
  return (
    <TouchableCardBase
      onClick={onClick}
      className={className}
      data-testid={testId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      {...props}
    >
      {children}
    </TouchableCardBase>
  )
}