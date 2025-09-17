import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Heart, Check } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { useAppStore } from '@/store'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { theme } from '@/styles/theme'
import activityTypesData from '@/mocks/activityTypes.json'

const SelectionContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`

const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  padding: ${theme.spacing.xl} ${theme.spacing.md};
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

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
`

const ProgressIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`

const ProgressDot = styled.div<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active }) => active ? theme.colors.white : 'rgba(255,255,255,0.3)'};
  transition: all 0.3s ease;
`

const ActivitiesSection = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.navy};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

const ActivityCard = styled(Card)<{ selected?: boolean; color?: string }>`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${({ selected, color }) => 
    selected ? color || theme.colors.primary : theme.colors.gray[200]};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`

const ActivityImage = styled.div<{ imageUrl: string }>`
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

const ActivityContent = styled.div`
  padding: ${theme.spacing.lg};
`

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`

const ActivityEmoji = styled.div`
  font-size: 2rem;
  line-height: 1;
`

const ActivityInfo = styled.div`
  flex: 1;
`

const ActivityName = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.xs};
`

const ActivityDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  line-height: 1.4;
`

const SelectionIndicator = styled.div<{ selected?: boolean; color?: string }>`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ selected, color }) => 
    selected ? color || theme.colors.primary : 'rgba(255,255,255,0.9)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => selected ? 'white' : theme.colors.gray[600]};
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: ${theme.shadows.md};
`

const ContinueSection = styled.div`
  position: sticky;
  bottom: ${theme.spacing.lg};
  margin: 0 ${theme.spacing.md};
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  border: 2px solid ${theme.colors.primary};
  text-align: center;
`

const SelectedCount = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.medium};
`

interface ActivityType {
  id: string
  name: string
  emoji: string
  description: string
  color: string
  activities: string[]
  imageUrl?: string
}

const activityImages: Record<string, string> = {
  adventure: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  relaxation: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  family: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  culture: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  nature: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  entertainment: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  shopping: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}

export const ActivitySelection: React.FC = () => {
  const navigate = useNavigate()
  const { setSelectedActivityTypes } = useAppStore()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [activityTypes] = useState<ActivityType[]>(activityTypesData as ActivityType[])

  useEffect(() => {
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'activity_selection' })
  }, [])

  const handleActivityToggle = (activityId: string) => {
    setSelectedTypes(prev => {
      const newSelection = prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
      
      analytics.track('activity_type_selected', {
        activityId,
        selected: !prev.includes(activityId),
        totalSelected: newSelection.length
      })
      
      return newSelection
    })
  }

  const handleContinue = () => {
    if (selectedTypes.length === 0) return
    
    setSelectedActivityTypes(selectedTypes)
    analytics.track('activity_selection_completed', {
      selectedTypes,
      count: selectedTypes.length
    })
    
    navigate('/guest/trip-map')
  }



  return (
    <SelectionContainer>
      <HeroSection>
        <Title>What do you love to do? 🌟</Title>
        <Subtitle>
          Help us create the perfect cruise experience by selecting the activities you enjoy most!
        </Subtitle>
        
        <ProgressIndicator>
          <ProgressDot active />
          <ProgressDot />
          <ProgressDot />
        </ProgressIndicator>
      </HeroSection>

      <ActivitiesSection>
        <SectionTitle>Choose Your Perfect Activities</SectionTitle>
        
        <ActivityGrid>
          {activityTypes.map((activity) => {
            const isSelected = selectedTypes.includes(activity.id)
            const imageUrl = activityImages[activity.id] || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            
            return (
              <ActivityCard
                key={activity.id}
                selected={isSelected}
                color={activity.color}
                onClick={() => handleActivityToggle(activity.id)}
                data-testid={`activity-${activity.id}`}
              >
                <ActivityImage imageUrl={imageUrl} />
                
                <ActivityContent>
                  <ActivityHeader>
                    <ActivityEmoji>{activity.emoji}</ActivityEmoji>
                    <ActivityInfo>
                      <ActivityName>{activity.name}</ActivityName>
                      <ActivityDescription>{activity.description}</ActivityDescription>
                    </ActivityInfo>
                  </ActivityHeader>
                </ActivityContent>
                
                <SelectionIndicator selected={isSelected} color={activity.color}>
                  {isSelected ? <Check size={18} /> : <Heart size={18} />}
                </SelectionIndicator>
              </ActivityCard>
            )
          })}
        </ActivityGrid>
      </ActivitiesSection>

      {selectedTypes.length > 0 && (
        <ContinueSection>
          <SelectedCount>
            {selectedTypes.length} {selectedTypes.length === 1 ? 'activity type' : 'activity types'} selected
          </SelectedCount>
          
          <Button
            size="lg"
            fullWidth
            onClick={handleContinue}
            data-testid="continue-button"
          >
            Continue to Trip Map
            <ChevronRight size={20} />
          </Button>
        </ContinueSection>
      )}
    </SelectionContainer>
  )
}