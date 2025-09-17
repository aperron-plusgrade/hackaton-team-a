import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Play, Eye, Calendar, MapPin, Users, Crown } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { Badge } from '@/components/Badge'
import { mockApi } from '@/lib/mockApi'
import { Passenger, Weather, Rule, Offer, Bundle } from '@/types'
import { RuleEngine, createContextFromPassenger } from '@/lib/ruleEngine'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const SimulatorContainer = styled.div`
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

const SimulatorContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 2fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const ControlPanel = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  height: fit-content;
`

const ControlSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const PreviewArea = styled.div``

const PreviewCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const PreviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const ContextInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ContextChip = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.ocean}10;
  color: ${({ theme }) => theme.colors.ocean};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const ResultsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

const ResultCard = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: 4px solid ${({ theme }) => theme.colors.teal};
`

const ResultTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ResultDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const AdminSimulator: React.FC = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([])
  const [weather, setWeather] = useState<Weather[]>([])
  const [rules, setRules] = useState<Rule[]>([])
  const [offers, setOffers] = useState<Offer[]>([])
  const [bundles, setBundles] = useState<Bundle[]>([])
  
  const [selectedPassenger, setSelectedPassenger] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedPort, setSelectedPort] = useState<string>('')
  const [overrideWeather, setOverrideWeather] = useState<string>('')
  const [isSeaDay, setIsSeaDay] = useState<boolean>(false)
  
  const [simulationResult, setSimulationResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [passengersData, weatherData, rulesData, offersData, bundlesData] = await Promise.all([
          mockApi.getPassengers(),
          mockApi.getWeather(),
          mockApi.getRules(),
          mockApi.getOffers(),
          mockApi.getBundles()
        ])
        
        setPassengers(passengersData)
        setWeather(weatherData)
        setRules(rulesData)
        setOffers(offersData)
        setBundles(bundlesData)
        
        // Set defaults
        if (passengersData.length > 0) {
          setSelectedPassenger(passengersData[0].id)
          if (passengersData[0].itinerary.length > 0) {
            setSelectedDate(passengersData[0].itinerary[0].date)
            setSelectedPort(passengersData[0].itinerary[0].port)
          }
        }
      } catch (error) {
        console.error('Failed to load simulator data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'admin_simulator' })
  }, [])

  const runSimulation = () => {
    const passenger = passengers.find(p => p.id === selectedPassenger)
    if (!passenger) return

    const weatherCondition = overrideWeather || 
      weather.find(w => w.date === selectedDate && w.port === selectedPort)?.condition || 
      'Sunny'

    const context = createContextFromPassenger(
      passenger,
      selectedDate,
      selectedPort,
      weatherCondition,
      isSeaDay
    )

    const ruleEngine = new RuleEngine(rules)
    const result = ruleEngine.evaluate(context)

    const promotedOfferDetails = result.promotedOffers.map(id => 
      offers.find(o => o.id === id)
    ).filter(Boolean)

    const promotedBundleDetails = result.promotedBundles.map(id => 
      bundles.find(b => b.id === id)
    ).filter(Boolean)

    setSimulationResult({
      context,
      result,
      promotedOfferDetails,
      promotedBundleDetails
    })

    analytics.track(ANALYTICS_EVENTS.SIMULATOR_RUN, {
      passengerId: selectedPassenger,
      date: selectedDate,
      port: selectedPort,
      weather: weatherCondition,
      promotedOffersCount: result.promotedOffers.length,
      promotedBundlesCount: result.promotedBundles.length
    })
  }

  const passengerOptions = passengers.map(p => ({
    value: p.id,
    label: `${p.name} (${p.loyaltyTier || 'Member'})`
  }))

  const selectedPassengerData = passengers.find(p => p.id === selectedPassenger)
  const dateOptions = selectedPassengerData?.itinerary.map(item => ({
    value: item.date,
    label: `${item.date} - ${item.port}`
  })) || []

  const weatherOptions = [
    { value: '', label: 'Use actual weather' },
    { value: 'Sunny', label: 'Sunny' },
    { value: 'Partly Cloudy', label: 'Partly Cloudy' },
    { value: 'Cloudy', label: 'Cloudy' },
    { value: 'Showers', label: 'Showers' },
    { value: 'Rain', label: 'Rain' }
  ]

  if (loading) {
    return <div>Loading simulator...</div>
  }

  return (
    <SimulatorContainer>
      <Header>
        <Title>{t('admin.simulator.title')}</Title>
        <Subtitle>
          Test how your rules and offers appear to different passenger segments and contexts
        </Subtitle>
      </Header>

      <SimulatorContent>
        <ControlPanel>
          <ControlSection>
            <SectionTitle>Passenger Context</SectionTitle>
            <Select
              label="Select Passenger"
              value={selectedPassenger}
              onChange={setSelectedPassenger}
              options={passengerOptions}
              fullWidth
            />
          </ControlSection>

          <ControlSection>
            <SectionTitle>Date & Location</SectionTitle>
            <Select
              label="Date & Port"
              value={selectedDate}
              onChange={(value) => {
                setSelectedDate(value)
                const itineraryItem = selectedPassengerData?.itinerary.find(i => i.date === value)
                if (itineraryItem) {
                  setSelectedPort(itineraryItem.port)
                  setIsSeaDay(itineraryItem.port === 'At Sea')
                }
              }}
              options={dateOptions}
              fullWidth
            />
          </ControlSection>

          <ControlSection>
            <SectionTitle>Weather Override</SectionTitle>
            <Select
              label="Weather Condition"
              value={overrideWeather}
              onChange={setOverrideWeather}
              options={weatherOptions}
              fullWidth
            />
          </ControlSection>

          <Button
            fullWidth
            size="lg"
            onClick={runSimulation}
            data-testid="run-simulation-button"
          >
            <Play size={20} />
            {t('admin.simulator.run')}
          </Button>
        </ControlPanel>

        <PreviewArea>
          {simulationResult && (
            <>
              <PreviewCard>
                <PreviewHeader>
                  <PreviewTitle>Simulation Context</PreviewTitle>
                </PreviewHeader>
                
                <ContextInfo>
                  <ContextChip>
                    <Calendar size={16} />
                    {simulationResult.context.date}
                  </ContextChip>
                  <ContextChip>
                    <MapPin size={16} />
                    {simulationResult.context.port || 'At Sea'}
                  </ContextChip>
                  <ContextChip>
                    <Users size={16} />
                    {simulationResult.context.party.adults}A {simulationResult.context.party.children}C
                  </ContextChip>
                  <ContextChip>
                    <Crown size={16} />
                    {simulationResult.context.loyaltyTier || 'Member'}
                  </ContextChip>
                  {simulationResult.context.weather && (
                    <ContextChip>
                      ☀️ {simulationResult.context.weather}
                    </ContextChip>
                  )}
                </ContextInfo>
              </PreviewCard>

              <PreviewCard>
                <PreviewTitle>Promoted Offers</PreviewTitle>
                <ResultsSection>
                  <ResultsGrid>
                    {simulationResult.promotedOfferDetails.map((offer: Offer) => (
                      <ResultCard key={offer.id}>
                        <ResultTitle>{offer.title}</ResultTitle>
                        <ResultDescription>${offer.price} - {offer.desc}</ResultDescription>
                      </ResultCard>
                    ))}
                  </ResultsGrid>
                </ResultsSection>
              </PreviewCard>

              <PreviewCard>
                <PreviewTitle>Promoted Bundles</PreviewTitle>
                <ResultsSection>
                  <ResultsGrid>
                    {simulationResult.promotedBundleDetails.map((bundle: Bundle) => (
                      <ResultCard key={bundle.id}>
                        <ResultTitle>{bundle.title}</ResultTitle>
                        <ResultDescription>${bundle.bundlePrice} - {bundle.desc}</ResultDescription>
                      </ResultCard>
                    ))}
                  </ResultsGrid>
                </ResultsSection>
              </PreviewCard>

              {simulationResult.result.badges.length > 0 && (
                <PreviewCard>
                  <PreviewTitle>Applied Badges</PreviewTitle>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {simulationResult.result.badges.map((badge: string) => (
                      <Badge key={badge} variant="gold" size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </PreviewCard>
              )}
            </>
          )}
        </PreviewArea>
      </SimulatorContent>
    </SimulatorContainer>
  )
}