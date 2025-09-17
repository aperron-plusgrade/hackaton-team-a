import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Plus, Edit, Trash2, Users } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { mockApi } from '@/lib/mockApi'
import { Segment } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'

const SegmentsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
`

const SegmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const SegmentCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const SegmentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SegmentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.teal};
`

const SegmentTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const SegmentDefinition = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono.join(', ')};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`

const SegmentActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const AdminSegments: React.FC = () => {
  const [segments, setSegments] = useState<Segment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSegments = async () => {
      try {
        const data = await mockApi.getSegments()
        setSegments(data)
      } catch (error) {
        console.error('Failed to load segments:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSegments()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'admin_segments' })
  }, [])

  const handleCreateSegment = () => {
    analytics.track(ANALYTICS_EVENTS.SEGMENT_CREATED, { source: 'admin_segments' })
  }

  const handleDeleteSegment = async (segment: Segment) => {
    if (window.confirm(`Are you sure you want to delete "${segment.name}"?`)) {
      try {
        await mockApi.deleteSegment(segment.id)
        setSegments(segments.filter(s => s.id !== segment.id))
      } catch (error) {
        console.error('Failed to delete segment:', error)
      }
    }
  }

  if (loading) {
    return <div>Loading segments...</div>
  }

  return (
    <SegmentsContainer>
      <Header>
        <Title>Manage Segments</Title>
        <Button onClick={handleCreateSegment} data-testid="create-segment-button">
          <Plus size={20} />
          Create Segment
        </Button>
      </Header>

      <SegmentsGrid>
        {segments.map((segment) => (
          <SegmentCard key={segment.id} hover>
            <SegmentHeader>
              <SegmentIcon>
                <Users size={24} />
              </SegmentIcon>
              <SegmentTitle>{segment.name}</SegmentTitle>
            </SegmentHeader>
            
            <SegmentDefinition>
              {JSON.stringify(segment.definition, null, 2)}
            </SegmentDefinition>
            
            <SegmentActions>
              <Button size="sm" variant="outline">
                <Edit size={16} />
                Edit
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => handleDeleteSegment(segment)}
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </SegmentActions>
          </SegmentCard>
        ))}
      </SegmentsGrid>
    </SegmentsContainer>
  )
}