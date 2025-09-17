import { Rule, Context, RuleEngineResult, Discount } from '@/types'

export class RuleEngine {
  private rules: Rule[]

  constructor(rules: Rule[]) {
    this.rules = rules.filter(rule => rule.enabled).sort((a, b) => b.priority - a.priority)
  }

  evaluate(context: Context): RuleEngineResult {
    const result: RuleEngineResult = {
      promotedOffers: [],
      promotedBundles: [],
      perks: [],
      discounts: [],
      badges: [],
    }

    const appliedRules: Rule[] = []

    for (const rule of this.rules) {
      if (this.matchesCondition(rule.when, context)) {
        appliedRules.push(rule)
        this.applyRuleAction(rule.then, result)
      }
    }

    // Remove duplicates and return
    return {
      promotedOffers: [...new Set(result.promotedOffers)],
      promotedBundles: [...new Set(result.promotedBundles)],
      perks: [...new Set(result.perks)],
      discounts: this.consolidateDiscounts(result.discounts),
      badges: [...new Set(result.badges)],
    }
  }

  private matchesCondition(condition: any, context: Context): boolean {
    // Check port condition
    if (condition.port && context.port) {
      if (!condition.port.includes(context.port)) {
        return false
      }
    }

    // Check weather condition
    if (condition.weather && context.weather) {
      if (!condition.weather.includes(context.weather)) {
        return false
      }
    }

    // Check date range
    if (condition.dateRange) {
      const contextDate = new Date(context.date)
      const startDate = new Date(condition.dateRange.start)
      const endDate = new Date(condition.dateRange.end)
      
      if (contextDate < startDate || contextDate > endDate) {
        return false
      }
    }

    // Check loyalty tier
    if (condition.loyaltyTier && context.loyaltyTier) {
      if (!condition.loyaltyTier.includes(context.loyaltyTier)) {
        return false
      }
    }

    // Check cabin class
    if (condition.cabinClass) {
      if (!condition.cabinClass.includes(context.cabinClass)) {
        return false
      }
    }

    // Check party children
    if (condition['party.children'] !== undefined) {
      if (context.party.children < condition['party.children']) {
        return false
      }
    }

    // Check sea day
    if (condition.seaDay !== undefined) {
      if (context.seaDay !== condition.seaDay) {
        return false
      }
    }

    return true
  }

  private applyRuleAction(action: any, result: RuleEngineResult): void {
    if (action.promoteOffers) {
      result.promotedOffers.push(...action.promoteOffers)
    }

    if (action.promoteBundles) {
      result.promotedBundles.push(...action.promoteBundles)
    }

    if (action.perks) {
      result.perks.push(...action.perks)
    }

    if (action.discounts) {
      result.discounts.push(...action.discounts)
    }

    if (action.badges) {
      result.badges.push(...action.badges)
    }
  }

  private consolidateDiscounts(discounts: Discount[]): Discount[] {
    const consolidated = new Map<string, Discount>()

    for (const discount of discounts) {
      const key = discount.offerId || discount.bundleId || 'unknown'
      const existing = consolidated.get(key)

      if (!existing) {
        consolidated.set(key, discount)
      } else {
        // Take the higher discount
        const existingValue = existing.percent || existing.fixed || 0
        const newValue = discount.percent || discount.fixed || 0
        
        if (newValue > existingValue) {
          consolidated.set(key, discount)
        }
      }
    }

    return Array.from(consolidated.values())
  }
}

// Utility function to create context from passenger data
export const createContextFromPassenger = (
  passenger: any,
  date: string,
  port?: string,
  weather?: string,
  seaDay?: boolean
): Context => {
  return {
    date,
    port,
    weather,
    seaDay: seaDay || port === 'At Sea',
    party: passenger.party,
    cabinClass: passenger.cabinClass,
    loyaltyTier: passenger.loyaltyTier,
  }
}