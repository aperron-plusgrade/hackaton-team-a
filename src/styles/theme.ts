export const theme = {
  colors: {
    // Premium ocean-themed cruise colors
    primary: '#0EA5E9', // Ocean blue - main brand
    secondary: '#06B6D4', // Cyan - secondary actions
    accent: '#F59E0B', // Golden accent - highlights
    sunshine: '#FCD34D', // Warm gold - premium features
    ocean: '#0369A1', // Deep ocean - navigation
    sunset: '#F97316', // Sunset - calls to action
    teal: '#06B6D4', // Teal - same as secondary for compatibility
    gold: '#F59E0B', // Gold - same as accent for compatibility
    
    // Supporting colors
    navy: '#0F172A', // Deep navy
    white: '#FFFFFF',
    offWhite: '#F8FAFC',
    
    // Premium gradients
    gradients: {
      primary: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
      sunset: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
      ocean: 'linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)',
      premium: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
      gold: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
      subtle: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)'
    },
    
    // Grays with warmer tones
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#18181B',
    },
    
    // Status colors with more joy
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
}

export type Theme = typeof theme