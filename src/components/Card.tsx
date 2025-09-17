import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
  className?: string
  'data-testid'?: string
}

const CardBase = styled(motion.div)<CardProps>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  transition: all 0.2s ease;
  
  ${({ padding, theme }) => {
    switch (padding) {
      case 'sm':
        return css`
          padding: ${theme.spacing.sm};
          
          @media (min-width: ${theme.breakpoints.sm}) {
            padding: ${theme.spacing.md};
          }
        `
      case 'lg':
        return css`
          padding: ${theme.spacing.lg};
          
          @media (min-width: ${theme.breakpoints.sm}) {
            padding: ${theme.spacing.xl};
          }
        `
      default:
        return css`
          padding: ${theme.spacing.md};
          
          @media (min-width: ${theme.breakpoints.sm}) {
            padding: ${theme.spacing.lg};
          }
        `
    }
  }}
  
  ${({ hover, theme }) => hover && css`
    @media (hover: hover) {
      &:hover {
        box-shadow: ${theme.shadows.md};
        transform: translateY(-2px);
      }
    }
    
    @media (hover: none) {
      &:active {
        box-shadow: ${theme.shadows.md};
        transform: translateY(-1px);
      }
    }
  `}
  
  ${({ clickable }) => clickable && css`
    cursor: pointer;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    }
  `}
`

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = false,
  clickable = false,
  onClick,
  className,
  'data-testid': testId,
  ...props
}) => {
  return (
    <CardBase
      padding={padding}
      hover={hover}
      clickable={clickable}
      onClick={onClick}
      className={className}
      data-testid={testId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </CardBase>
  )
}