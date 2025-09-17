import React from 'react'
import styled, { css } from 'styled-components'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  options: SelectOption[]
  disabled?: boolean
  error?: string
  required?: boolean
  fullWidth?: boolean
  'data-testid'?: string
}

const SelectContainer = styled.div<{ fullWidth?: boolean }>`
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

const SelectWrapper = styled.div`
  position: relative;
`

const SelectBase = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[800]};
  transition: all 0.2s ease;
  appearance: none;
  cursor: pointer;
  min-height: 48px;
  
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

const ChevronIcon = styled(ChevronDown)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray[400]};
  pointer-events: none;
`

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
`

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  disabled = false,
  error,
  required = false,
  fullWidth = false,
  'data-testid': testId,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <SelectContainer fullWidth={fullWidth}>
      {label && (
        <Label>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Label>
      )}
      <SelectWrapper>
        <SelectBase
          value={value}
          onChange={handleChange}
          disabled={disabled}
          hasError={!!error}
          data-testid={testId}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectBase>
        <ChevronIcon />
      </SelectWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  )
}