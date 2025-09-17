import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  'data-testid'?: string
}

const ButtonBase = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ocean};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
          min-height: 40px;
          
          @media (max-width: ${theme.breakpoints.sm}) {
            min-height: 44px;
            padding: ${theme.spacing.md} ${theme.spacing.lg};
          }
        `
      case 'lg':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.typography.fontSize.lg};
          min-height: 52px;
          
          @media (max-width: ${theme.breakpoints.sm}) {
            min-height: 48px;
            padding: ${theme.spacing.md} ${theme.spacing.lg};
            font-size: ${theme.typography.fontSize.base};
          }
        `
      default:
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.base};
          min-height: 44px;
          
          @media (max-width: ${theme.breakpoints.sm}) {
            min-height: 48px;
          }
        `
    }
  }}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.gray[200]};
          }
        `
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.ocean};
          border-color: ${theme.colors.ocean};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.ocean};
            color: ${theme.colors.white};
          }
        `
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.gray[600]};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[800]};
          }
        `
      case 'danger':
        return css`
          background: ${theme.colors.error};
          color: ${theme.colors.white};
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `
      default:
        return css`
          background: ${theme.colors.ocean};
          color: ${theme.colors.white};
          
          &:hover:not(:disabled) {
            background: #0c5a94;
          }
        `
    }
  }}
`

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  'data-testid': testId,
  ...props
}) => {
  return (
    <ButtonBase
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      data-testid={testId}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </ButtonBase>
  )
}