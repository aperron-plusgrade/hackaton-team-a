import { Passenger, Weather, Offer, Bundle, Segment, Rule } from '@/types'
import passengersData from '@/mocks/passengers.json'
import weatherData from '@/mocks/weather.json'
import offersData from '@/mocks/offers.json'
import bundlesData from '@/mocks/bundles.json'
import segmentsData from '@/mocks/segments.json'
import rulesData from '@/mocks/rules.json'

// Simulate network latency
const delay = (ms: number = 300 + Math.random() * 700) => 
  new Promise(resolve => setTimeout(resolve, ms))

// Local storage keys
const STORAGE_KEYS = {
  OFFERS: 'cruisex_offers',
  BUNDLES: 'cruisex_bundles',
  SEGMENTS: 'cruisex_segments',
  RULES: 'cruisex_rules',
  CART: 'cruisex_cart',
  WALLET: 'cruisex_wallet',
  GAMIFICATION: 'cruisex_gamification',
}

// Initialize localStorage with seed data if empty
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.OFFERS)) {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offersData))
  }
  if (!localStorage.getItem(STORAGE_KEYS.BUNDLES)) {
    localStorage.setItem(STORAGE_KEYS.BUNDLES, JSON.stringify(bundlesData))
  }
  if (!localStorage.getItem(STORAGE_KEYS.SEGMENTS)) {
    localStorage.setItem(STORAGE_KEYS.SEGMENTS, JSON.stringify(segmentsData))
  }
  if (!localStorage.getItem(STORAGE_KEYS.RULES)) {
    localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(rulesData))
  }
}

// Initialize on module load
initializeStorage()

export const mockApi = {
  // Passengers
  async getPassengers(): Promise<Passenger[]> {
    await delay()
    return passengersData as Passenger[]
  },

  async getPassenger(id: string): Promise<Passenger | null> {
    await delay()
    const passengers = passengersData as Passenger[]
    return passengers.find(p => p.id === id) || null
  },

  // Weather
  async getWeather(): Promise<Weather[]> {
    await delay()
    return weatherData as Weather[]
  },

  async getWeatherByDatePort(date: string, port: string): Promise<Weather | null> {
    await delay()
    const weather = weatherData as Weather[]
    return weather.find(w => w.date === date && w.port === port) || null
  },

  // Offers
  async getOffers(): Promise<Offer[]> {
    await delay()
    const stored = localStorage.getItem(STORAGE_KEYS.OFFERS)
    return stored ? JSON.parse(stored) : []
  },

  async getOffer(id: string): Promise<Offer | null> {
    await delay()
    const offers = await this.getOffers()
    return offers.find(o => o.id === id) || null
  },

  async createOffer(offer: Omit<Offer, 'id'>): Promise<Offer> {
    await delay()
    const newOffer = { ...offer, id: `off_${Date.now()}` }
    const offers = await this.getOffers()
    const updated = [...offers, newOffer]
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(updated))
    return newOffer
  },

  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
    await delay()
    const offers = await this.getOffers()
    const index = offers.findIndex(o => o.id === id)
    if (index === -1) return null
    
    const updated = { ...offers[index], ...updates }
    offers[index] = updated
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers))
    return updated
  },

  async deleteOffer(id: string): Promise<boolean> {
    await delay()
    const offers = await this.getOffers()
    const filtered = offers.filter(o => o.id !== id)
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(filtered))
    return true
  },

  // Bundles
  async getBundles(): Promise<Bundle[]> {
    await delay()
    const stored = localStorage.getItem(STORAGE_KEYS.BUNDLES)
    return stored ? JSON.parse(stored) : []
  },

  async getBundle(id: string): Promise<Bundle | null> {
    await delay()
    const bundles = await this.getBundles()
    return bundles.find(b => b.id === id) || null
  },

  async createBundle(bundle: Omit<Bundle, 'id'>): Promise<Bundle> {
    await delay()
    const newBundle = { ...bundle, id: `bun_${Date.now()}` }
    const bundles = await this.getBundles()
    const updated = [...bundles, newBundle]
    localStorage.setItem(STORAGE_KEYS.BUNDLES, JSON.stringify(updated))
    return newBundle
  },

  async updateBundle(id: string, updates: Partial<Bundle>): Promise<Bundle | null> {
    await delay()
    const bundles = await this.getBundles()
    const index = bundles.findIndex(b => b.id === id)
    if (index === -1) return null
    
    const updated = { ...bundles[index], ...updates }
    bundles[index] = updated
    localStorage.setItem(STORAGE_KEYS.BUNDLES, JSON.stringify(bundles))
    return updated
  },

  async deleteBundle(id: string): Promise<boolean> {
    await delay()
    const bundles = await this.getBundles()
    const filtered = bundles.filter(b => b.id !== id)
    localStorage.setItem(STORAGE_KEYS.BUNDLES, JSON.stringify(filtered))
    return true
  },

  // Segments
  async getSegments(): Promise<Segment[]> {
    await delay()
    const stored = localStorage.getItem(STORAGE_KEYS.SEGMENTS)
    return stored ? JSON.parse(stored) : []
  },

  async createSegment(segment: Omit<Segment, 'id'>): Promise<Segment> {
    await delay()
    const newSegment = { ...segment, id: `seg_${Date.now()}` }
    const segments = await this.getSegments()
    const updated = [...segments, newSegment]
    localStorage.setItem(STORAGE_KEYS.SEGMENTS, JSON.stringify(updated))
    return newSegment
  },

  async updateSegment(id: string, updates: Partial<Segment>): Promise<Segment | null> {
    await delay()
    const segments = await this.getSegments()
    const index = segments.findIndex(s => s.id === id)
    if (index === -1) return null
    
    const updated = { ...segments[index], ...updates }
    segments[index] = updated
    localStorage.setItem(STORAGE_KEYS.SEGMENTS, JSON.stringify(segments))
    return updated
  },

  async deleteSegment(id: string): Promise<boolean> {
    await delay()
    const segments = await this.getSegments()
    const filtered = segments.filter(s => s.id !== id)
    localStorage.setItem(STORAGE_KEYS.SEGMENTS, JSON.stringify(filtered))
    return true
  },

  // Rules
  async getRules(): Promise<Rule[]> {
    await delay()
    const stored = localStorage.getItem(STORAGE_KEYS.RULES)
    return stored ? JSON.parse(stored) : []
  },

  async createRule(rule: Omit<Rule, 'id'>): Promise<Rule> {
    await delay()
    const newRule = { ...rule, id: `rule_${Date.now()}` }
    const rules = await this.getRules()
    const updated = [...rules, newRule]
    localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(updated))
    return newRule
  },

  async updateRule(id: string, updates: Partial<Rule>): Promise<Rule | null> {
    await delay()
    const rules = await this.getRules()
    const index = rules.findIndex(r => r.id === id)
    if (index === -1) return null
    
    const updated = { ...rules[index], ...updates }
    rules[index] = updated
    localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(rules))
    return updated
  },

  async deleteRule(id: string): Promise<boolean> {
    await delay()
    const rules = await this.getRules()
    const filtered = rules.filter(r => r.id !== id)
    localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(filtered))
    return true
  },
}