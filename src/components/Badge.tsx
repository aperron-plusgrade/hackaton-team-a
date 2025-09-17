import React from 'react'
import styled, { css } from 'styled-components'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gold'
  size?: 'sm' | 'md'
  className?: string
}

const BadgeBase = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  white-space: nowrap;
  
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSize.xs};
        `
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `
    }
  }}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
        `
      case 'success':
        return css`
          background: #dcfce7;
          color: #166534;
        `
      case 'warning':
        return css`
          background: #fef3c7;
          color: #92400e;
        `
      case 'error':
        return css`
          background: #fee2e2;
          color: #991b1b;
        `
      case 'gold':
        return css`
          background: ${theme.colors.gold};
          color: ${theme.colors.navy};
        `
      default:
        return css`
          background: ${theme.colors.ocean};
          color: ${theme.colors.white};
        `
    }
  }}
`

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <BadgeBase
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </BadgeBase>
  )
}