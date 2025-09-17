import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing.xl};
`

const NotFoundCard = styled(Card)`
  text-align: center;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.xxl};
`

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1;
`

const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ErrorDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <NotFoundContainer>
      <NotFoundCard>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorDescription>
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on course.
        </ErrorDescription>
        <ActionButtons>
          <Button onClick={handleGoBack} variant="outline">
            <ArrowLeft size={20} />
            Go Back
          </Button>
          <Button onClick={handleGoHome}>
            <Home size={20} />
            Go Home
          </Button>
        </ActionButtons>
      </NotFoundCard>
    </NotFoundContainer>
  )
}