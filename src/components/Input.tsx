import React from 'react'
import styled, { css } from 'styled-components'

interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  disabled?: boolean
  error?: string
  required?: boolean
  fullWidth?: boolean
  'data-testid'?: string
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
`

const InputBase = styled.input<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;
  min-height: 48px;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.ocean};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.ocean}20;
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px; /* Prevents zoom on iOS */
    min-height: 52px;
  }
  
  ${({ hasError, theme }) => hasError && css`
    border-color: ${theme.colors.error};
    
    &:focus {
      border-color: ${theme.colors.error};
      box-shadow: 0 0 0 3px ${theme.colors.error}20;
    }
  `}
`

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
`

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  required = false,
  fullWidth = false,
  'data-testid': testId,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <InputContainer fullWidth={fullWidth}>
      {label && (
        <Label>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Label>
      )}
      <InputBase
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        hasError={!!error}
        data-testid={testId}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}