import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div<{ size?: 'sm' | 'md' | 'lg' }>`
  display: flex;
  align-items: center;
  gap: ${({ size }) => {
    switch (size) {
      case 'sm': return '8px'
      case 'lg': return '16px'
      default: return '12px'
    }
  }};
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const LogoImage = styled.img<{ size?: 'sm' | 'md' | 'lg' }>`
  height: ${({ size }) => {
    switch (size) {
      case 'sm': return '24px'
      case 'lg': return '48px'
      default: return '32px'
    }
  }};
  width: auto;
  object-fit: contain;
`

const LogoText = styled.span<{ size?: 'sm' | 'md' | 'lg'; hideText?: boolean }>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'sm': return '16px'
      case 'lg': return '24px'
      default: return '20px'
    }
  }};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  display: ${({ hideText }) => hideText ? 'none' : 'block'};
  
  @media (max-width: 480px) {
    display: ${({ hideText }) => hideText ? 'none' : 'none'};
  }
`

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  hideText?: boolean
  onClick?: () => void
  'data-testid'?: string
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  hideText = false, 
  onClick,
  'data-testid': testId 
}) => {
  // Using a data URL for the logo image to embed it directly
  const logoDataUrl = `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FCD34D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F97316;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#E0F2FE;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#7DD3FC;stop-opacity:1" />
          <stop offset="70%" style="stop-color:#0EA5E9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0369A1;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0EA5E9;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Sun -->
      <circle cx="500" cy="150" r="120" fill="url(#sunGradient)" />
      
      <!-- Ship Hull -->
      <path d="M150 350 Q200 320 300 320 L600 320 Q650 320 680 350 L680 400 Q680 420 660 420 L170 420 Q150 420 150 400 Z" fill="url(#shipGradient)" />
      
      <!-- Ship Deck Lines -->
      <rect x="180" y="340" width="480" height="8" rx="4" fill="white" opacity="0.8" />
      <rect x="200" y="360" width="440" height="6" rx="3" fill="white" opacity="0.6" />
      <rect x="220" y="380" width="400" height="4" rx="2" fill="white" opacity="0.4" />
      
      <!-- Ship Superstructure -->
      <rect x="300" y="280" width="200" height="40" rx="8" fill="white" />
      <rect x="320" y="260" width="160" height="20" rx="4" fill="#F97316" />
      
      <!-- Waves -->
      <path d="M0 450 Q100 430 200 450 T400 450 T600 450 T800 450 L800 500 Q600 480 400 500 T0 500 Z" fill="url(#waveGradient)" />
      <path d="M0 480 Q150 460 300 480 T600 480 T800 480 L800 520 Q600 500 400 520 T0 520 Z" fill="url(#waveGradient)" opacity="0.7" />
    </svg>
  `)}`

  return (
    <LogoContainer size={size} onClick={onClick} data-testid={testId}>
      <LogoImage src={logoDataUrl} alt="CruiseMate Logo" size={size} />
      {!hideText && <LogoText size={size}>CruiseMate</LogoText>}
    </LogoContainer>
  )
}