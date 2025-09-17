import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { 
  Package, 
  Layers, 
  Users, 
  Zap, 
  Play, 
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Target
} from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { mockApi } from '@/lib/mockApi'
import { Offer, Bundle, Segment, Rule } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const DashboardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`

const KPICard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const KPIHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const KPIIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.ocean}10;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.ocean};
  margin-right: ${({ theme }) => theme.spacing.md};
`

const KPIValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const KPILabel = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`

const ModuleCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ModuleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.ocean}10;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.ocean};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ModuleTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ModuleDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`

const ModuleStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const StatItem = styled.div`
  text-align: center;
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

interface DashboardStats {
  offers: number
  bundles: number
  segments: number
  rules: number
}

const mockKPIs = [
  {
    icon: <Target size={24} />,
    value: '13.4%',
    label: 'Conversion Rate',
    trend: '+2.1%'
  },
  {
    icon: <ShoppingCart size={24} />,
    value: '1.9',
    label: 'Attach Rate',
    trend: '+0.3'
  },
  {
    icon: <DollarSign size={24} />,
    value: '$112',
    label: 'Average Order Value',
    trend: '+$8'
  },
  {
    icon: <TrendingUp size={24} />,
    value: '$72k',
    label: 'GMV (7 days)',
    trend: '+12%'
  }
]

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate()
  const [stats, setStats] = useState<DashboardStats>({
    offers: 0,
    bundles: 0,
    segments: 0,
    rules: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [offers, bundles, segments, rules] = await Promise.all([
          mockApi.getOffers(),
          mockApi.getBundles(),
          mockApi.getSegments(),
          mockApi.getRules()
        ])

        setStats({
          offers: offers.length,
          bundles: bundles.length,
          segments: segments.length,
          rules: rules.length
        })
      } catch (error) {
        console.error('Failed to load dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'admin_dashboard' })
  }, [])

  const modules = [
    {
      path: '/admin/offers',
      icon: <Package size={32} />,
      title: t('admin.offers.title'),
      description: 'Create and manage individual offers with pricing, descriptions, and targeting rules.',
      stats: [
        { value: stats.offers.toString(), label: 'Total Offers' },
        { value: '8', label: 'Active' }
      ]
    },
    {
      path: '/admin/bundles',
      icon: <Layers size={32} />,
      title: t('admin.bundles.title'),
      description: 'Build curated packages that combine multiple offers with special pricing.',
      stats: [
        { value: stats.bundles.toString(), label: 'Total Bundles' },
        { value: '4', label: 'Active' }
      ]
    },
    {
      path: '/admin/segments',
      icon: <Users size={32} />,
      title: 'Manage Segments',
      description: 'Define passenger segments based on demographics, loyalty, and preferences.',
      stats: [
        { value: stats.segments.toString(), label: 'Segments' },
        { value: '3', label: 'Active' }
      ]
    },
    {
      path: '/admin/rules',
      icon: <Zap size={32} />,
      title: t('admin.rules.title'),
      description: 'Create intelligent rules that automatically promote offers based on context.',
      stats: [
        { value: stats.rules.toString(), label: 'Total Rules' },
        { value: '5', label: 'Enabled' }
      ]
    },
    {
      path: '/admin/simulator',
      icon: <Play size={32} />,
      title: t('admin.simulator.title'),
      description: 'Test how your rules and offers appear to different passenger segments.',
      stats: [
        { value: '12', label: 'Simulations' },
        { value: '3', label: 'Today' }
      ]
    },
    {
      path: '/admin/analytics',
      icon: <TrendingUp size={32} />,
      title: 'Analytics Dashboard',
      description: 'Track performance metrics, conversion rates, and revenue optimization.',
      stats: [
        { value: '13.4%', label: 'CVR' },
        { value: '$72k', label: 'GMV' }
      ]
    }
  ]

  const handleModuleClick = (path: string, title: string) => {
    navigate(path)
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { 
      page: path.split('/').pop(),
      source: 'dashboard_module'
    })
  }

  if (loading) {
    return (
      <DashboardContainer>
        <div>Loading dashboard...</div>
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>{t('admin.dashboard.title')}</Title>
        <Subtitle>
          Manage your cruise upselling platform and track performance metrics
        </Subtitle>
      </DashboardHeader>

      <KPIGrid>
        {mockKPIs.map((kpi, index) => (
          <KPICard key={index} hover>
            <KPIHeader>
              <KPIIcon>{kpi.icon}</KPIIcon>
              <Badge variant="success" size="sm">{kpi.trend}</Badge>
            </KPIHeader>
            <KPIValue>{kpi.value}</KPIValue>
            <KPILabel>{kpi.label}</KPILabel>
          </KPICard>
        ))}
      </KPIGrid>

      <ModuleGrid>
        {modules.map((module) => (
          <ModuleCard
            key={module.path}
            onClick={() => handleModuleClick(module.path, module.title)}
            data-testid={`module-${module.path.split('/').pop()}`}
          >
            <ModuleIcon>{module.icon}</ModuleIcon>
            <ModuleTitle>{module.title}</ModuleTitle>
            <ModuleDescription>{module.description}</ModuleDescription>
            <ModuleStats>
              {module.stats.map((stat, index) => (
                <StatItem key={index}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </ModuleStats>
            <Button fullWidth variant="outline">
              Manage {module.title}
            </Button>
          </ModuleCard>
        ))}
      </ModuleGrid>
    </DashboardContainer>
  )
}