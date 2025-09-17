import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Plus, Edit, Trash2, Zap, ToggleLeft, ToggleRight } from 'lucide-react'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { mockApi } from '@/lib/mockApi'
import { Rule } from '@/types'
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics'
import { t } from '@/lib/i18n'

const RulesContainer = styled.div`
  max-width: 1400px;
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

const RulesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const RuleCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const RuleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const RuleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const RuleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gold}20;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.gold};
`

const RuleTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
`

const RuleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const RuleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const RuleSection = styled.div``

const SectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const RuleConditions = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono.join(', ')};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`

const RuleActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ToggleButton = styled.button<{ enabled: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  background: none;
  color: ${({ enabled, theme }) => enabled ? theme.colors.success : theme.colors.gray[500]};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`

export const AdminRules: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRules = async () => {
      try {
        const data = await mockApi.getRules()
        setRules(data)
      } catch (error) {
        console.error('Failed to load rules:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRules()
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: 'admin_rules' })
  }, [])

  const handleCreateRule = () => {
    analytics.track(ANALYTICS_EVENTS.RULE_CREATED, { source: 'admin_rules' })
  }

  const handleToggleRule = async (rule: Rule) => {
    try {
      const updated = await mockApi.updateRule(rule.id, { enabled: !rule.enabled })
      if (updated) {
        setRules(rules.map(r => r.id === rule.id ? updated : r))
        analytics.track(ANALYTICS_EVENTS.RULE_UPDATED, { 
          ruleId: rule.id, 
          enabled: !rule.enabled 
        })
      }
    } catch (error) {
      console.error('Failed to toggle rule:', error)
    }
  }

  const handleDeleteRule = async (rule: Rule) => {
    if (window.confirm(`Are you sure you want to delete "${rule.name}"?`)) {
      try {
        await mockApi.deleteRule(rule.id)
        setRules(rules.filter(r => r.id !== rule.id))
        analytics.track(ANALYTICS_EVENTS.RULE_DELETED, { ruleId: rule.id })
      } catch (error) {
        console.error('Failed to delete rule:', error)
      }
    }
  }

  if (loading) {
    return <div>Loading rules...</div>
  }

  return (
    <RulesContainer>
      <Header>
        <Title>{t('admin.rules.title')}</Title>
        <Button onClick={handleCreateRule} data-testid="create-rule-button">
          <Plus size={20} />
          {t('admin.rules.create')}
        </Button>
      </Header>

      <RulesGrid>
        {rules.map((rule) => (
          <RuleCard key={rule.id} hover>
            <RuleHeader>
              <RuleInfo>
                <RuleIcon>
                  <Zap size={24} />
                </RuleIcon>
                <RuleTitle>{rule.name}</RuleTitle>
              </RuleInfo>
              
              <RuleMeta>
                <Badge variant="secondary" size="sm">
                  Priority: {rule.priority}
                </Badge>
                <Badge 
                  variant={rule.enabled ? 'success' : 'secondary'} 
                  size="sm"
                >
                  {rule.enabled ? 'Enabled' : 'Disabled'}
                </Badge>
              </RuleMeta>
            </RuleHeader>
            
            <RuleContent>
              <RuleSection>
                <SectionTitle>When (Conditions)</SectionTitle>
                <RuleConditions>
                  {JSON.stringify(rule.when, null, 2)}
                </RuleConditions>
              </RuleSection>
              
              <RuleSection>
                <SectionTitle>Then (Actions)</SectionTitle>
                <RuleConditions>
                  {JSON.stringify(rule.then, null, 2)}
                </RuleConditions>
              </RuleSection>
            </RuleContent>
            
            <RuleActions>
              <ToggleButton
                enabled={rule.enabled}
                onClick={() => handleToggleRule(rule)}
                data-testid={`toggle-rule-${rule.id}`}
              >
                {rule.enabled ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                {rule.enabled ? 'Enabled' : 'Disabled'}
              </ToggleButton>
              
              <Button size="sm" variant="outline">
                <Edit size={16} />
                Edit
              </Button>
              
              <Button
                size="sm"
                variant="danger"
                onClick={() => handleDeleteRule(rule)}
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </RuleActions>
          </RuleCard>
        ))}
      </RulesGrid>
    </RulesContainer>
  )
}