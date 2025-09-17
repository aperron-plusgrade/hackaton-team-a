# CruiseX Upsell Studio

A joyful, family-oriented cruise experience platform that guides guests through their perfect vacation journey with personalized recommendations and interactive features.

## 🌟 Features

### 🎯 Guest Journey Experience
- **Activity Selection**: Spotify-like interface to choose favorite activity types
- **Interactive Trip Map**: Pixelated game-style map to explore destinations
- **Destination Activities**: Discover activities tailored to your interests
- **Onboard Upgrades**: Exclusive deals and packages available during cruise
- **Smart Chatbot**: Helpful assistant with reminders and recommendations
- **Gamification**: Rewards system with spin-to-win and tier progression
- **Trip Planning**: Visual cart and wallet for managing bookings

### 🛠️ Admin Studio (Revenue Manager)
- **Dashboard**: KPIs, metrics, and module overview
- **Offers Management**: Create and manage individual offers with pricing and targeting
- **Bundles Management**: Build curated packages with special pricing
- **Segments Management**: Define passenger segments based on demographics and preferences
- **Rules Engine**: Create intelligent if/then rules for automatic offer promotion
- **Simulator**: Preview how offers appear to different passenger segments
- **Analytics**: Track performance metrics and conversion rates

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Styled Components with maritime theme
- **State Management**: Zustand with localStorage persistence
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Mock API**: In-memory with localStorage persistence
- **Testing**: Data-testid attributes for E2E testing
- **i18n**: Built-in internationalization support
- **Analytics**: Event tracking with console logging

## 🎨 Design System

### Theme Colors (Joyful Family Vacation)
- **Primary**: #FF6B6B (Coral red - energetic and fun)
- **Secondary**: #4ECDC4 (Turquoise - ocean vibes)
- **Accent**: #45B7D1 (Sky blue - adventure)
- **Sunshine**: #FFE66D (Bright yellow - happiness)
- **Ocean**: #06D6A0 (Mint green - tropical)
- **Sunset**: #F38BA8 (Pink - playful)

### Components
- Button (variants: primary, secondary, outline, ghost, danger)
- Card (with hover effects and padding options)
- Badge (status indicators with color variants)
- Input & Select (form controls with validation)
- Layout components (Header, Sidebar, responsive grid)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cruisex-upsell-studio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The app will be available at `http://localhost:5173`

## 📱 Usage

### Switching Personas
Use the persona switcher in the top-right header to toggle between:
- **Admin**: Access revenue management tools
- **Guest**: Experience the passenger interface

### Default Data
The app comes pre-loaded with realistic mock data:
- 3 sample passengers with different profiles
- 8 offers across various categories
- 4 curated bundles with savings
- 5 passenger segments
- 5 intelligent rules for offer promotion
- Weather data for ports
- Itinerary information

### Key Workflows

#### Admin Workflow
1. Visit `/admin` to see the dashboard
2. Create/edit offers in `/admin/offers`
3. Build bundles in `/admin/bundles`
4. Define rules in `/admin/rules`
5. Test with simulator in `/admin/simulator`

#### Guest Workflow
1. Visit `/guest/pretrip` for pre-cruise offers
2. Browse daily deals in `/guest/onboard`
3. Play gamification in `/guest/gamify`
4. Manage cart in `/guest/cart`
5. View perks in `/guest/wallet`

## 🧪 Rule Engine

The app includes a sophisticated rule engine that evaluates passenger context:

### Context Factors
- Date and port location
- Weather conditions
- Party composition (adults/children)
- Cabin class and loyalty tier
- Sea day vs port day

### Rule Actions
- Promote specific offers/bundles
- Apply discounts (percentage or fixed)
- Add contextual badges
- Grant loyalty perks
- Priority-based conflict resolution

### Example Rule
```json
{
  "name": "Sunny→Cabana Push",
  "when": {
    "port": ["Nassau", "Cozumel"],
    "weather": ["Sunny", "Partly Cloudy"]
  },
  "then": {
    "promoteOffers": ["off_cabana"],
    "badges": ["Weather-Perfect"],
    "discounts": [{"offerId": "off_cabana", "percent": 10}]
  }
}
```

## 📊 Analytics & Tracking

All user interactions are tracked with event analytics:
- Page views and navigation
- Offer/bundle interactions
- Cart operations
- Gamification activities
- Admin actions

Events are logged to console and stored in localStorage for development.

## 🎮 Gamification System

### Tier Progression
- **Tier 1**: Explorer (0-2 purchases)
- **Tier 2**: Adventurer (3-5 purchases)  
- **Tier 3**: Captain (6+ purchases)

### Spin-to-Win Wheel
- Daily spin opportunity
- Random rewards (discounts, perks, cocktails)
- Visual wheel animation with 3-second spin
- Rewards automatically added to wallet

## 💾 Data Persistence

All user data persists in localStorage:
- Cart items and quantities
- Unlocked perks and wallet contents
- Gamification progress and tier
- Admin-created offers/bundles/rules
- Feature flag preferences

## 🌐 Internationalization

Built-in i18n support with English as default:
- Centralized translation keys
- Parameter substitution
- Easy language switching (framework ready)

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Color contrast AA+ compliance
- Focus management
- Screen reader friendly

## 📱 Mobile-First Responsive Design

Built with a mobile-first approach for optimal experience across all devices:

### Mobile Optimizations
- **Touch-friendly interactions**: 48px+ touch targets, proper tap highlights
- **Responsive navigation**: Collapsible sidebar with overlay on mobile
- **Optimized typography**: Scalable font sizes, prevents iOS zoom on inputs
- **Grid layouts**: Single column on mobile, expanding to multi-column on larger screens
- **Touch gestures**: Proper active states and visual feedback
- **Performance**: Hardware acceleration for smooth animations

### Breakpoint Strategy
- **xs**: 480px+ (large phones)
- **sm**: 640px+ (small tablets)
- **md**: 768px+ (tablets)
- **lg**: 1024px+ (laptops)
- **xl**: 1280px+ (desktops)
- **xxl**: 1536px+ (large screens)

### Mobile-Specific Features
- Hamburger menu navigation
- Swipe-friendly card interactions
- Optimized form controls (16px font size to prevent zoom)
- Touch-optimized button sizes
- Responsive image handling
- Mobile-first CSS Grid layouts

## 🔧 Configuration

### Feature Flags
Toggle features via the app store:
- `enableGamification`: Show/hide gamification features
- `enableTimedDeals`: Display countdown timers
- `enableDynamicWeatherSections`: Weather-based offer sections
- `enableA11yHints`: Additional accessibility hints

### Mock API Configuration
Customize mock data by editing files in `/src/mocks/`:
- `passengers.json`: Sample passenger profiles
- `offers.json`: Available offers catalog
- `bundles.json`: Curated package deals
- `weather.json`: Port weather conditions
- `rules.json`: Business rules configuration

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
│   ├── admin/          # Admin interface pages
│   └── guest/          # Guest experience pages
├── lib/                # Utilities and services
│   ├── mockApi.ts      # Mock API layer
│   ├── ruleEngine.ts   # Business rules engine
│   ├── analytics.ts    # Event tracking
│   └── i18n.ts         # Internationalization
├── mocks/              # Mock data files
├── store/              # Zustand state management
├── styles/             # Theme and global styles
└── types/              # TypeScript definitions
```

## 🚀 Deployment

The app is built as a static SPA and can be deployed to any static hosting service:

```bash
npm run build
# Deploy the `dist` folder to your hosting provider
```

Recommended platforms:
- Vercel
- Netlify  
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the console for error messages
2. Verify localStorage data integrity
3. Clear browser cache if needed
4. Check network tab for mock API calls

---

Built with ⚓ for the cruise industry