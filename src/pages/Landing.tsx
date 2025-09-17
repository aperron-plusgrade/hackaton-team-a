import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Users, Zap, TrendingUp } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { useAppStore } from '@/store'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { theme } from '@/styles/theme'

const LandingContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
`

const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  padding: ${theme.spacing.xxl} ${theme.spacing.md};
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize['3xl']};
    margin-bottom: ${theme.spacing.lg};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.xl};
  }
`

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  align-items: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    gap: ${theme.spacing.lg};
    justify-content: center;
  }
`

const FeaturesSection = styled.div`
  padding: ${theme.spacing.xxl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.navy};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${theme.spacing.xl};
  }
`

const FeatureCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`

const FeatureImage = styled.div<{ imageUrl: string }>`
  height: 160px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`

const FeatureContent = styled.div`
  padding: ${theme.spacing.xl};
  text-align: center;
`

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${theme.colors.primary}15;
  border-radius: ${theme.borderRadius.full};
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.primary};
`

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.md};
`

const FeatureDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
  font-size: ${theme.typography.fontSize.sm};
`

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
  border: none;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
`

const features = [
  {
    icon: <Users size={32} />,
    title: 'Family-Friendly Activities',
    description: 'Discover activities perfect for every family member, from toddlers to grandparents!',
    imageUrl: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Zap size={32} />,
    title: 'Smart Recommendations',
    description: 'Get personalized suggestions based on your interests, weather, and destination.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Interactive Trip Planning',
    description: 'Explore destinations on our fun map interface and build your perfect cruise itinerary.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export const Landing: React.FC = () => {
  const navigate = useNavigate()
  const setPersona = useAppStore((state) => state.setPersona)

  const handleAdminDemo = () => {
    setPersona('admin')
    navigate('/admin')
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { 
      page: 'admin_dashboard',
      source: 'landing_cta'
    })
  }

  const handleStartExperience = () => {
    setPersona('guest')
    navigate('/guest/activity-selection')
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { 
      page: 'guest_activity_selection',
      source: 'landing_cta'
    })
  }

  return (
    <LandingContainer>
      <HeroSection>
        <HeroTitle>
          Welcome to CruiseMate
        </HeroTitle>
        <HeroSubtitle>
          Your premium cruise companion for curated experiences, exclusive destinations, 
          and personalized luxury at sea.
        </HeroSubtitle>
        
        <CTASection>
          <PrimaryButton 
            size="lg" 
            onClick={handleStartExperience}
            data-testid="guest-demo-button"
          >
            Begin Your Experience
            <ArrowRight size={20} />
          </PrimaryButton>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleAdminDemo}
            data-testid="admin-demo-button"
          >
            Admin Dashboard
            <ArrowRight size={20} />
          </Button>
        </CTASection>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose CruiseMate?</SectionTitle>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureImage imageUrl={feature.imageUrl} />
              <FeatureContent>
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeaturesSection>
    </LandingContainer>
  )
}