import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Layout } from "@/components/Layout";
import { Chatbot } from "@/components/Chatbot";
import { Landing } from "@/pages/Landing";
import { AdminDashboard } from "@/pages/admin/Dashboard";
import { AdminOffers } from "@/pages/admin/Offers";
import { AdminBundles } from "@/pages/admin/Bundles";
import { AdminSegments } from "@/pages/admin/Segments";
import { AdminRules } from "@/pages/admin/Rules";
import { AdminSimulator } from "@/pages/admin/Simulator";
import { AdminAnalytics } from "@/pages/admin/Analytics";
import { Dashboard } from "@/pages/guest/Dashboard";
import { GuidedJourney } from "@/pages/guest/GuidedJourney";
import { Itinerary } from "@/pages/guest/Itinerary";
import { Concierge } from "@/pages/guest/Concierge";
import { Profile } from "@/pages/guest/Profile";
import { ActivitySelection } from "@/pages/guest/ActivitySelection";
import { TripMap } from "@/pages/guest/TripMap";
import { DestinationActivities } from "@/pages/guest/DestinationActivities";
import { OnboardUpgrades } from "@/pages/guest/OnboardUpgrades";
import { GuestPreTrip } from "@/pages/guest/PreTrip";
import { GuestOnboard } from "@/pages/guest/Onboard";
import { GuestGamify } from "@/pages/guest/Gamify";
import { GuestCart } from "@/pages/guest/Cart";
import { GuestWallet } from "@/pages/guest/Wallet";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/guided-journey" element={<GuidedJourney />} />

            {/* Guest Journey - Guided Experience */}
            <Route path="/start" element={<GuidedJourney />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Admin Routes - Hidden from navigation, accessible by URL only */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/offers" element={<AdminOffers />} />
            <Route path="/admin/bundles" element={<AdminBundles />} />
            <Route path="/admin/segments" element={<AdminSegments />} />
            <Route path="/admin/rules" element={<AdminRules />} />
            <Route path="/admin/simulator" element={<AdminSimulator />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />

            {/* Guest Journey Routes */}
            <Route
              path="/guest/activity-selection"
              element={<ActivitySelection />}
            />
            <Route path="/guest/trip-map" element={<TripMap />} />
            <Route
              path="/guest/destination-activities"
              element={<DestinationActivities />}
            />
            <Route
              path="/guest/onboard-upgrades"
              element={<OnboardUpgrades />}
            />
            <Route path="/guest/pretrip" element={<GuestPreTrip />} />
            <Route path="/guest/onboard" element={<GuestOnboard />} />
            <Route path="/guest/gamify" element={<GuestGamify />} />
            <Route path="/guest/cart" element={<GuestCart />} />
            <Route path="/guest/wallet" element={<GuestWallet />} />

            {/* Bottom Navigation Routes */}
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/profile" element={<Profile />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Chatbot available on all pages */}
          <Chatbot />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
