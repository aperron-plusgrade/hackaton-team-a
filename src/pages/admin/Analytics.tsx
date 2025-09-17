import React from 'react'
import styled from 'styled-components'
import { TrendingUp, DollarSign, ShoppingCart, Target, Users, Package } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'

const AnalyticsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const MetricCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const MetricIcon = styled.div`
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

const MetricValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const MetricLabel = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const ChartCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
`

const ChartTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ChartPlaceholder = styled.div`
  height: 300px;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-style: italic;
`

const TopItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const TopItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const ItemInfo = styled.div``

const ItemName = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ItemStats = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

const mockMetrics = [
  {
    icon: <Target size={24} />,
    value: '13.4%',
    label: 'Conversion Rate',
    trend: '+2.1%',
    trendUp: true
  },
  {
    icon: <ShoppingCart size={24} />,
    value: '1.9',
    label: 'Attach Rate',
    trend: '+0.3',
    trendUp: true
  },
  {
    icon: <DollarSign size={24} />,
    value: '$112',
    label: 'Average Order Value',
    trend: '+$8',
    trendUp: true
  },
  {
    icon: <TrendingUp size={24} />,
    value: '$72k',
    label: 'GMV (7 days)',
    trend: '+12%',
    trendUp: true
  },
  {
    icon: <Users size={24} />,
    value: '2,847',
    label: 'Active Passengers',
    trend: '+156',
    trendUp: true
  },
  {
    icon: <Package size={24} />,
    value: '8',
    label: 'Active Offers',
    trend: '+2',
    trendUp: true
  }
]

const topOffers = [
  { name: 'Premium Wi-Fi', revenue: '$12,450', conversions: '234' },
  { name: 'Couples Massage', revenue: '$8,920', conversions: '56' },
  { name: 'Chef\'s Table', revenue: '$7,740', conversions: '60' },
  { name: 'Sun Deck Cabana', revenue: '$6,230', conversions: '70' }
]

const topBundles = [
  { name: 'Luxury Escape', revenue: '$18,750', conversions: '62' },
  { name: 'Family Adventure', revenue: '$14,320', conversions: '84' },
  { name: 'Romantic Getaway', revenue: '$11,890', conversions: '36' }
]

export const AdminAnalytics: React.FC = () => {
  return (
    <AnalyticsContainer>
      <Header>
        <Title>Analytics Dashboard</Title>
        <Subtitle>
          Track performance metrics and optimize your upselling strategy
        </Subtitle>
      </Header>

      <MetricsGrid>
        {mockMetrics.map((metric, index) => (
          <MetricCard key={index} hover>
            <MetricHeader>
              <MetricIcon>{metric.icon}</MetricIcon>
              <Badge 
                variant={metric.trendUp ? 'success' : 'error'} 
                size="sm"
              >
                {metric.trend}
              </Badge>
            </MetricHeader>
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricCard>
        ))}
      </MetricsGrid>

      <ChartsGrid>
        <ChartCard>
          <ChartTitle>Revenue Trend (Last 30 Days)</ChartTitle>
          <ChartPlaceholder>
            📈 Revenue chart would be displayed here
          </ChartPlaceholder>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Conversion by Weather</ChartTitle>
          <ChartPlaceholder>
            🌤️ Weather conversion chart
          </ChartPlaceholder>
        </ChartCard>
      </ChartsGrid>

      <ChartsGrid>
        <ChartCard>
          <ChartTitle>Top Performing Offers</ChartTitle>
          <TopItemsList>
            {topOffers.map((offer, index) => (
              <TopItem key={index}>
                <ItemInfo>
                  <ItemName>{offer.name}</ItemName>
                  <ItemStats>{offer.conversions} conversions</ItemStats>
                </ItemInfo>
                <Badge variant="success" size="sm">
                  {offer.revenue}
                </Badge>
              </TopItem>
            ))}
          </TopItemsList>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Top Performing Bundles</ChartTitle>
          <TopItemsList>
            {topBundles.map((bundle, index) => (
              <TopItem key={index}>
                <ItemInfo>
                  <ItemName>{bundle.name}</ItemName>
                  <ItemStats>{bundle.conversions} conversions</ItemStats>
                </ItemInfo>
                <Badge variant="success" size="sm">
                  {bundle.revenue}
                </Badge>
              </TopItem>
            ))}
          </TopItemsList>
        </ChartCard>
      </ChartsGrid>
    </AnalyticsContainer>
  )
}