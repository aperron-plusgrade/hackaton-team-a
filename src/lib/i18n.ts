interface TranslationKeys {
  // Common
  'common.loading': string
  'common.error': string
  'common.save': string
  'common.cancel': string
  'common.delete': string
  'common.edit': string
  'common.create': string
  'common.back': string
  'common.next': string
  'common.previous': string
  'common.close': string
  'common.confirm': string
  
  // Navigation
  'nav.admin': string
  'nav.guest': string
  'nav.dashboard': string
  'nav.offers': string
  'nav.bundles': string
  'nav.segments': string
  'nav.rules': string
  'nav.simulator': string
  'nav.analytics': string
  'nav.pretrip': string
  'nav.onboard': string
  'nav.gamify': string
  'nav.cart': string
  'nav.wallet': string
  
  // Admin
  'admin.dashboard.title': string
  'admin.offers.title': string
  'admin.offers.create': string
  'admin.bundles.title': string
  'admin.bundles.create': string
  'admin.rules.title': string
  'admin.rules.create': string
  'admin.simulator.title': string
  'admin.simulator.run': string
  
  // Guest
  'guest.pretrip.title': string
  'guest.onboard.title': string
  'guest.cart.title': string
  'guest.wallet.title': string
  'guest.gamify.title': string
  'guest.gamify.spin': string
  'guest.surprise.title': string
  
  // Offers & Bundles
  'offer.addToCart': string
  'offer.viewDetails': string
  'bundle.addToCart': string
  'bundle.viewDetails': string
  'bundle.includes': string
  'bundle.saveAmount': string
  
  // Cart & Checkout
  'cart.empty': string
  'cart.total': string
  'cart.checkout': string
  'checkout.success': string
  'checkout.failed': string
  
  // Weather & Conditions
  'weather.sunny': string
  'weather.cloudy': string
  'weather.rainy': string
  'weather.partlyCloudy': string
  
  // Loyalty & Perks
  'loyalty.gold': string
  'loyalty.platinum': string
  'loyalty.silver': string
  'perk.unlocked': string
  'perk.expired': string
}

const translations: Record<string, TranslationKeys> = {
  en: {
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.close': 'Close',
    'common.confirm': 'Confirm',
    
    // Navigation
    'nav.admin': 'Admin Studio',
    'nav.guest': 'Guest Experience',
    'nav.dashboard': 'Dashboard',
    'nav.offers': 'Offers',
    'nav.bundles': 'Bundles',
    'nav.segments': 'Segments',
    'nav.rules': 'Rules',
    'nav.simulator': 'Simulator',
    'nav.analytics': 'Analytics',
    'nav.pretrip': 'Pre-Trip',
    'nav.onboard': 'Onboard',
    'nav.gamify': 'Rewards',
    'nav.cart': 'Cart',
    'nav.wallet': 'Wallet',
    
    // Admin
    'admin.dashboard.title': 'Revenue Manager Dashboard',
    'admin.offers.title': 'Manage Offers',
    'admin.offers.create': 'Create New Offer',
    'admin.bundles.title': 'Manage Bundles',
    'admin.bundles.create': 'Create New Bundle',
    'admin.rules.title': 'Manage Rules',
    'admin.rules.create': 'Create New Rule',
    'admin.simulator.title': 'Preview Simulator',
    'admin.simulator.run': 'Run Simulation',
    
    // Guest
    'guest.pretrip.title': 'Enhance Your Cruise',
    'guest.onboard.title': 'Today\'s Offers',
    'guest.cart.title': 'Your Cart',
    'guest.wallet.title': 'Your Wallet',
    'guest.gamify.title': 'Unlock Rewards',
    'guest.gamify.spin': 'Spin to Win',
    'guest.surprise.title': 'Surprise Me!',
    
    // Offers & Bundles
    'offer.addToCart': 'Add to Cart',
    'offer.viewDetails': 'View Details',
    'bundle.addToCart': 'Add Bundle',
    'bundle.viewDetails': 'View Bundle',
    'bundle.includes': 'Includes',
    'bundle.saveAmount': 'Save',
    
    // Cart & Checkout
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'checkout.success': 'Purchase successful!',
    'checkout.failed': 'Purchase failed. Please try again.',
    
    // Weather & Conditions
    'weather.sunny': 'Sunny',
    'weather.cloudy': 'Cloudy',
    'weather.rainy': 'Rainy',
    'weather.partlyCloudy': 'Partly Cloudy',
    
    // Loyalty & Perks
    'loyalty.gold': 'Gold Member',
    'loyalty.platinum': 'Platinum Member',
    'loyalty.silver': 'Silver Member',
    'perk.unlocked': 'Perk Unlocked!',
    'perk.expired': 'Expired',
  }
}

class I18n {
  private currentLocale: string = 'en'
  
  setLocale(locale: string) {
    if (translations[locale]) {
      this.currentLocale = locale
    }
  }
  
  t(key: keyof TranslationKeys, params?: Record<string, string>): string {
    const translation = translations[this.currentLocale]?.[key] || key
    
    if (!params) {
      return translation
    }
    
    // Simple parameter replacement
    return Object.entries(params).reduce(
      (text, [param, value]) => text.replace(`{{${param}}}`, value),
      translation
    )
  }
  
  getCurrentLocale(): string {
    return this.currentLocale
  }
  
  getAvailableLocales(): string[] {
    return Object.keys(translations)
  }
}

export const i18n = new I18n()
export const t = i18n.t.bind(i18n)