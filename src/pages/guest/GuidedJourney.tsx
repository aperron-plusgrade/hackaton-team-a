import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight, ArrowLeft, Check, MapPin, Calendar, Star } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { useAppStore } from '@/store'

const JourneyContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1E293B 0%, #334155 50%, #0EA5E9 100%);
  padding: ${({ theme }) => theme.spacing.lg};
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
`

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease;
  border-radius: 2px;
`

const StepCard = styled(Card)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: 2rem;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.3);
  
  &::after {
    content: '⚓';
    color: white;
    font-size: 2rem;
  }
`

const StepTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const OptionCard = styled(Card)<{ selected?: boolean }>`
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  border: 2px solid ${({ selected, theme }) => 
    selected ? theme.colors.primary : theme.colors.gray[200]};
  background: ${({ selected, theme }) => 
    selected ? `${theme.colors.primary}10` : theme.colors.white};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`

const OptionIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: white;
  font-size: 1.5rem;
  
  &::after {
    content: '◆';
  }
`

const OptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const OptionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
`

const StepCounter = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.9;
`

interface Step {
  id: string
  title: string
  description: string
  icon: string
  options?: Array<{
    id: string
    title: string
    description: string
    icon: string
  }>
}

const steps: Step[] = [
  {
    id: 'welcome',
    title: 'Welcome to CruiseMate',
    description: 'Your premium cruise companion designed to curate exceptional experiences tailored to your preferences.',
    icon: 'logo'
  },
  {
    id: 'interests',
    title: 'Curate Your Perfect Experience',
    description: 'Select your preferred activities to receive personalized recommendations and exclusive offers.',
    icon: 'compass',
    options: [
      {
        id: 'adventure',
        title: 'Adventure & Sports',
        description: 'Thrilling excursions and active experiences',
        icon: 'mountain'
      },
      {
        id: 'culture',
        title: 'Culture & Heritage',
        description: 'Immersive cultural tours and historical sites',
        icon: 'landmark'
      },
      {
        id: 'relaxation',
        title: 'Wellness & Spa',
        description: 'Rejuvenating treatments and serene experiences',
        icon: 'spa'
      },
      {
        id: 'family',
        title: 'Family Experiences',
        description: 'Memorable activities for all generations',
        icon: 'family'
      },
      {
        id: 'dining',
        title: 'Culinary Excellence',
        description: 'Fine dining and exclusive culinary experiences',
        icon: 'dining'
      },
      {
        id: 'entertainment',
        title: 'Premium Entertainment',
        description: 'Exclusive shows and VIP experiences',
        icon: 'theater'
      }
    ]
  }
]

export const GuidedJourney: React.FC = () => {
  const navigate = useNavigate()
  const { setSelectedActivityTypes } = useAppStore()
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const step = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  const handleNext = () => {
    if (step.id === 'interests') {
      setSelectedActivityTypes(selectedOptions)
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Journey complete, navigate directly to upgrades to drive sales
      navigate('/guest/onboard-upgrades')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = step.options ? selectedOptions.length > 0 : true

  return (
    <JourneyContainer>
      <StepCounter>
        Step {currentStep + 1} of {steps.length}
      </StepCounter>
      
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>

      <StepCard>
        <StepIcon>
          {step.icon === 'logo' ? <Logo size="lg" hideText /> : step.icon}
        </StepIcon>
        
        <StepTitle>{step.title}</StepTitle>
        <StepDescription>{step.description}</StepDescription>

        {step.options && (
          <OptionsGrid>
            {step.options.map((option) => (
              <OptionCard
                key={option.id}
                selected={selectedOptions.includes(option.id)}
                onClick={() => handleOptionSelect(option.id)}
              >
                <OptionIcon>{option.icon}</OptionIcon>
                <OptionTitle>{option.title}</OptionTitle>
                <OptionDescription>{option.description}</OptionDescription>
                {selectedOptions.includes(option.id) && (
                  <Check 
                    size={20} 
                    style={{ 
                      position: 'absolute', 
                      top: '12px', 
                      right: '12px', 
                      color: '#0EA5E9' 
                    }} 
                  />
                )}
              </OptionCard>
            ))}
          </OptionsGrid>
        )}

        <NavigationButtons>
          <div style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}>
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            size="lg"
          >
            {currentStep === steps.length - 1 ? (
              <>
                <Star size={16} />
                See My Personalized Offers
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </NavigationButtons>
      </StepCard>
    </JourneyContainer>
  )
}