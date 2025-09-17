export interface Passenger {
  id: string
  passengerId: string
  name: string
  party: {
    adults: number
    children: number
    infants: number
  }
  cabinClass: string
  loyaltyTier?: string
  ship: string
  cruiseLine: string
  sailingStart: string
  sailingEnd: string
  itinerary: ItineraryPort[]
}

export interface ItineraryPort {
  date: string
  port: string
  country: string
  lat: number
  lng: number
}

export interface Weather {
  date: string
  port: string
  condition: string
  tempC: number
  windKph: number
}

export interface Offer {
  id: string
  type: string
  title: string
  desc: string
  price: number
  currency: 'USD' | 'EUR'
  tags: string[]
  media: string
}

export interface Bundle {
  id: string
  title: string
  desc: string
  items: string[]
  bundlePrice: number
  compareAt: number
  currency: string
  media: string
  badges?: string[]
}

export interface Segment {
  id: string
  name: string
  definition: Record<string, any>
}

export interface Rule {
  id: string
  name: string
  when: RuleCondition
  then: RuleAction
  priority: number
  enabled: boolean
}

export interface RuleCondition {
  port?: string[]
  weather?: string[]
  dateRange?: {
    start: string
    end: string
  }
  loyaltyTier?: string[]
  cabinClass?: string[]
  'party.children'?: number
  seaDay?: boolean
}

export interface RuleAction {
  promoteOffers?: string[]
  promoteBundles?: string[]
  badges?: string[]
  discounts?: Discount[]
  perks?: string[]
}

export interface Discount {
  offerId?: string
  bundleId?: string
  percent?: number
  fixed?: number
}

export interface Context {
  date: string
  port?: string
  weather?: string
  seaDay?: boolean
  party: {
    adults: number
    children: number
    infants: number
  }
  cabinClass: string
  loyaltyTier?: string
}

export interface RuleEngineResult {
  promotedOffers: string[]
  promotedBundles: string[]
  perks: string[]
  discounts: Discount[]
  badges: string[]
}

export interface CartItem {
  id: string
  type: 'offer' | 'bundle'
  quantity: number
  price: number
}

export interface Perk {
  id: string
  title: string
  description: string
  status: 'active' | 'used' | 'expired'
  expiryDate?: string
}

export interface GamificationState {
  tier: number
  progress: number
  lastSpinDate?: string
  totalPurchases: number
  unlockedPerks: string[]
}

export type PersonaType = 'admin' | 'guest'