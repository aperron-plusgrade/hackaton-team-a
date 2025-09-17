interface AnalyticsEvent {
  eventName: string
  payload: Record<string, any>
  timestamp: number
}

class Analytics {
  private events: AnalyticsEvent[] = []

  track(eventName: string, payload: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      eventName,
      payload,
      timestamp: Date.now(),
    }

    this.events.push(event)
    
    // Log to console for development
    console.log('📊 Analytics Event:', {
      event: eventName,
      data: payload,
      time: new Date().toISOString(),
    })

    // Store in localStorage for persistence
    this.persistEvents()
  }

  private persistEvents() {
    try {
      // Keep only last 1000 events to prevent storage bloat
      const recentEvents = this.events.slice(-1000)
      localStorage.setItem('cruisex_analytics', JSON.stringify(recentEvents))
    } catch (error) {
      console.warn('Failed to persist analytics events:', error)
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events]
  }

  getEventsByName(eventName: string): AnalyticsEvent[] {
    return this.events.filter(event => event.eventName === eventName)
  }

  clearEvents() {
    this.events = []
    localStorage.removeItem('cruisex_analytics')
  }

  // Load persisted events on initialization
  private loadPersistedEvents() {
    try {
      const stored = localStorage.getItem('cruisex_analytics')
      if (stored) {
        this.events = JSON.parse(stored)
      }
    } catch (error) {
      console.warn('Failed to load persisted analytics events:', error)
    }
  }

  constructor() {
    this.loadPersistedEvents()
  }
}

// Create singleton instance
export const analytics = new Analytics()

// Common event names for consistency
export const ANALYTICS_EVENTS = {
  // Admin events
  OFFER_CREATED: 'offer_created',
  OFFER_UPDATED: 'offer_updated',
  OFFER_DELETED: 'offer_deleted',
  BUNDLE_CREATED: 'bundle_created',
  BUNDLE_UPDATED: 'bundle_updated',
  BUNDLE_DELETED: 'bundle_deleted',
  RULE_CREATED: 'rule_created',
  RULE_UPDATED: 'rule_updated',
  RULE_DELETED: 'rule_deleted',
  SEGMENT_CREATED: 'segment_created',
  SIMULATOR_RUN: 'simulator_run',
  
  // Guest events
  OFFER_VIEWED: 'offer_viewed',
  OFFER_ADDED_TO_CART: 'offer_added_to_cart',
  BUNDLE_VIEWED: 'bundle_viewed',
  BUNDLE_ADDED_TO_CART: 'bundle_added_to_cart',
  CART_VIEWED: 'cart_viewed',
  CHECKOUT_STARTED: 'checkout_started',
  CHECKOUT_COMPLETED: 'checkout_completed',
  SPIN_WHEEL_USED: 'spin_wheel_used',
  PERK_UNLOCKED: 'perk_unlocked',
  SURPRISE_ME_CLICKED: 'surprise_me_clicked',
  
  // Navigation
  PAGE_VIEWED: 'page_viewed',
  PERSONA_SWITCHED: 'persona_switched',
} as const