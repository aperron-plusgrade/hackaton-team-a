import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PersonaType, CartItem, Perk, GamificationState, Passenger } from '@/types'

interface AppState {
  // Persona
  currentPersona: PersonaType
  setPersona: (persona: PersonaType) => void
  
  // Current passenger (for guest experience)
  currentPassenger: Passenger | null
  setCurrentPassenger: (passenger: Passenger | null) => void
  
  // Guest journey state
  selectedActivityTypes: string[]
  setSelectedActivityTypes: (types: string[]) => void
  selectedDestination: any | null
  setSelectedDestination: (destination: any) => void
  
  // Cart
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string, type: 'offer' | 'bundle') => void
  updateCartItemQuantity: (id: string, type: 'offer' | 'bundle', quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  
  // Wallet & Perks
  perks: Perk[]
  addPerk: (perk: Perk) => void
  usePerk: (perkId: string) => void
  
  // Gamification & Loyalty
  gamification: GamificationState
  loyaltyPoints: number
  updateGamificationProgress: (progress: number) => void
  incrementTier: () => void
  setLastSpinDate: (date: string) => void
  incrementPurchases: () => void
  unlockPerk: (perkId: string) => void
  addLoyaltyPoints: (points: number) => void
  spendLoyaltyPoints: (points: number) => void
  
  // Feature flags
  featureFlags: {
    enableGamification: boolean
    enableTimedDeals: boolean
    enableDynamicWeatherSections: boolean
    enableSimulatorDeepLink: boolean
    enableA11yHints: boolean
  }
  toggleFeatureFlag: (flag: keyof AppState['featureFlags']) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Persona
      currentPersona: 'guest',
      setPersona: (persona) => set({ currentPersona: persona }),
      
      // Current passenger - Default mock passenger
      currentPassenger: {
        id: '1',
        passengerId: 'P001',
        name: 'Sarah Johnson',
        party: {
          adults: 2,
          children: 1,
          infants: 0
        },
        cabinClass: 'Balcony',
        loyaltyTier: 'Gold',
        ship: 'Royal Caribbean Odyssey',
        cruiseLine: 'Royal Caribbean',
        sailingStart: '2024-03-15',
        sailingEnd: '2024-03-22',
        itinerary: [
          {
            date: '2024-03-15',
            port: 'Miami',
            country: 'USA',
            lat: 25.7617,
            lng: -80.1918
          },
          {
            date: '2024-03-16',
            port: 'At Sea',
            country: 'Caribbean',
            lat: 24.0,
            lng: -76.0
          },
          {
            date: '2024-03-17',
            port: 'Nassau',
            country: 'Bahamas',
            lat: 25.0443,
            lng: -77.3504
          },
          {
            date: '2024-03-18',
            port: 'Cozumel',
            country: 'Mexico',
            lat: 20.4230,
            lng: -86.9223
          },
          {
            date: '2024-03-19',
            port: 'Costa Maya',
            country: 'Mexico',
            lat: 18.7373,
            lng: -87.7586
          },
          {
            date: '2024-03-20',
            port: 'At Sea',
            country: 'Caribbean',
            lat: 22.0,
            lng: -80.0
          },
          {
            date: '2024-03-21',
            port: 'Key West',
            country: 'USA',
            lat: 24.5551,
            lng: -81.7800
          },
          {
            date: '2024-03-22',
            port: 'Miami',
            country: 'USA',
            lat: 25.7617,
            lng: -80.1918
          }
        ]
      },
      setCurrentPassenger: (passenger) => set({ currentPassenger: passenger }),
      
      // Guest journey state
      selectedActivityTypes: [],
      setSelectedActivityTypes: (types) => set({ selectedActivityTypes: types }),
      selectedDestination: null,
      setSelectedDestination: (destination) => set({ selectedDestination: destination }),
      
      // Cart
      cartItems: [],
      addToCart: (item) => {
        const { cartItems } = get()
        const existingIndex = cartItems.findIndex(
          (cartItem) => cartItem.id === item.id && cartItem.type === item.type
        )
        
        if (existingIndex >= 0) {
          const updatedItems = [...cartItems]
          updatedItems[existingIndex].quantity += item.quantity
          set({ cartItems: updatedItems })
        } else {
          set({ cartItems: [...cartItems, item] })
        }
      },
      
      removeFromCart: (id, type) => {
        const { cartItems } = get()
        set({
          cartItems: cartItems.filter(
            (item) => !(item.id === id && item.type === type)
          )
        })
      },
      
      updateCartItemQuantity: (id, type, quantity) => {
        const { cartItems } = get()
        if (quantity <= 0) {
          get().removeFromCart(id, type)
          return
        }
        
        const updatedItems = cartItems.map((item) =>
          item.id === id && item.type === type
            ? { ...item, quantity }
            : item
        )
        set({ cartItems: updatedItems })
      },
      
      clearCart: () => set({ cartItems: [] }),
      
      getCartTotal: () => {
        const { cartItems } = get()
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      // Wallet & Perks
      perks: [],
      addPerk: (perk) => {
        const { perks } = get()
        set({ perks: [...perks, perk] })
      },
      
      usePerk: (perkId) => {
        const { perks } = get()
        const updatedPerks = perks.map((perk) =>
          perk.id === perkId ? { ...perk, status: 'used' as const } : perk
        )
        set({ perks: updatedPerks })
      },
      
      // Gamification & Loyalty
      gamification: {
        tier: 1,
        progress: 0,
        totalPurchases: 0,
        unlockedPerks: [],
      },
      loyaltyPoints: 2500, // Starting points
      
      updateGamificationProgress: (progress) => {
        const { gamification } = get()
        set({
          gamification: {
            ...gamification,
            progress: Math.min(progress, 100),
          }
        })
      },
      
      incrementTier: () => {
        const { gamification } = get()
        set({
          gamification: {
            ...gamification,
            tier: Math.min(gamification.tier + 1, 3),
            progress: 0,
          }
        })
      },
      
      setLastSpinDate: (date) => {
        const { gamification } = get()
        set({
          gamification: {
            ...gamification,
            lastSpinDate: date,
          }
        })
      },
      
      incrementPurchases: () => {
        const { gamification } = get()
        const newTotal = gamification.totalPurchases + 1
        let newProgress = gamification.progress + 25
        let newTier = gamification.tier
        
        // Check for tier progression
        if (newProgress >= 100 && newTier < 3) {
          newTier += 1
          newProgress = 0
        }
        
        set({
          gamification: {
            ...gamification,
            totalPurchases: newTotal,
            progress: Math.min(newProgress, 100),
            tier: newTier,
          }
        })
      },
      
      unlockPerk: (perkId) => {
        const { gamification } = get()
        if (!gamification.unlockedPerks.includes(perkId)) {
          set({
            gamification: {
              ...gamification,
              unlockedPerks: [...gamification.unlockedPerks, perkId],
            }
          })
        }
      },
      
      addLoyaltyPoints: (points) => {
        const { loyaltyPoints } = get()
        set({ loyaltyPoints: loyaltyPoints + points })
      },
      
      spendLoyaltyPoints: (points) => {
        const { loyaltyPoints } = get()
        set({ loyaltyPoints: Math.max(0, loyaltyPoints - points) })
      },
      
      // Feature flags
      featureFlags: {
        enableGamification: true,
        enableTimedDeals: true,
        enableDynamicWeatherSections: true,
        enableSimulatorDeepLink: true,
        enableA11yHints: true,
      },
      
      toggleFeatureFlag: (flag) => {
        const { featureFlags } = get()
        set({
          featureFlags: {
            ...featureFlags,
            [flag]: !featureFlags[flag],
          }
        })
      },
    }),
    {
      name: 'cruisex-app-store',
      partialize: (state) => ({
        currentPersona: state.currentPersona,
        currentPassenger: state.currentPassenger,
        selectedActivityTypes: state.selectedActivityTypes,
        selectedDestination: state.selectedDestination,
        cartItems: state.cartItems,
        perks: state.perks,
        gamification: state.gamification,
        loyaltyPoints: state.loyaltyPoints,
        featureFlags: state.featureFlags,
      }),
    }
  )
)