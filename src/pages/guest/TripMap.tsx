import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Thermometer,
  Wind,
  ShoppingCart,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Logo } from "@/components/Logo";
import { useAppStore } from "@/store";
import { mockApi } from "@/lib/mockApi";
import { Weather, Offer } from "@/types";
import { analytics, ANALYTICS_EVENTS } from "@/lib/analytics";
import { theme } from "@/styles/theme";

const MapContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`;

const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["3xl"]};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.lg};
`;

const TimerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.sunset};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  animation: pulse 2s infinite;
  margin-bottom: ${theme.spacing.lg};

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const DestinationsSection = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.navy};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const RouteMap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;

const DestinationCard = styled(Card)<{ visited?: boolean; featured?: boolean }>`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid
    ${({ visited, featured, theme }) =>
      visited
        ? theme.colors.success
        : featured
        ? theme.colors.sunset
        : theme.colors.gray[200]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const DestinationImage = styled.div<{ imageUrl: string }>`
  height: 160px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`;

const DestinationContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const SalesCallout = styled.div`
  background: ${theme.colors.sunset};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
`;

const DestinationHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const DestinationName = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const DestinationDate = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  background: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.md};
`;

const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[700]};
`;

const ActivityCount = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const FeaturedBadge = styled(Badge)`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  z-index: 2;
`;

const ShipIcon = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const CartSummary = styled(Card)`
  position: sticky;
  bottom: ${theme.spacing.lg};
  margin: 0 ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.xl};
  border: 2px solid ${theme.colors.primary};
  text-align: center;
`;

const CartHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const CartTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.navy};
  margin-bottom: ${theme.spacing.xs};
`;

const CartSubtitle = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
`;

const getWeatherEmoji = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "☀️";
    case "partly cloudy":
      return "⛅";
    case "cloudy":
      return "☁️";
    case "showers":
      return "🌦️";
    case "rain":
      return "🌧️";
    default:
      return "☀️";
  }
};

export const TripMap: React.FC = () => {
  const navigate = useNavigate();
  const { currentPassenger, selectedActivityTypes, setSelectedDestination } =
    useAppStore();
  const [weather, setWeather] = useState<Weather[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [visitedDestinations, setVisitedDestinations] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [weatherData, offersData] = await Promise.all([
          mockApi.getWeather(),
          mockApi.getOffers(),
        ]);
        setWeather(weatherData);
        setOffers(offersData);
      } catch (error) {
        console.error("Failed to load trip map data:", error);
      }
    };

    loadData();
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: "trip_map" });
  }, []);

  const handleDestinationClick = (destination: any) => {
    setSelectedDestination(destination);
    setVisitedDestinations((prev) => [...new Set([...prev, destination.port])]);

    analytics.track("destination_selected", {
      port: destination.port,
      country: destination.country,
      date: destination.date,
    });

    navigate("/guest/destination-activities");
  };

  const getDestinationWeather = (date: string, port: string) => {
    return weather.find((w) => w.date === date && w.port === port);
  };

  const getActivityCount = (port: string) => {
    // Mock activity count based on selected activity types
    return Math.floor(Math.random() * 8) + 3;
  };

  if (!currentPassenger) {
    return <div>Loading your trip...</div>;
  }

  const getDestinationImage = (port: string) => {
    const images = {
      Nassau:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nassau paradise beach
      Cozumel:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Cozumel underwater coral
      "Costa Maya":
        "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Costa Maya tropical beach
      "Key West":
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Key West sunset
      Miami:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Miami beach skyline
      Barbados:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Barbados pristine beach
      "St. Thomas":
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // St. Thomas harbor
      "St. Maarten":
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // St. Maarten beach
      Jamaica:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Jamaica tropical paradise
      "Grand Cayman":
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Grand Cayman stingray city
    };
    return (
      images[port as keyof typeof images] ||
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    );
  };

  return (
    <MapContainer>
      <HeroSection>
        <TimerBadge>
          🔥 Book Now - Limited Shore Excursion Spots Available!
        </TimerBadge>
        <HeroTitle>Your Exclusive Shore Destinations</HeroTitle>
        <HeroSubtitle>
          Discover curated excursions at each port - book early for premium
          experiences!
        </HeroSubtitle>
      </HeroSection>

      <DestinationsSection>
        <SectionTitle>Select Your Perfect Shore Excursions</SectionTitle>

        <RouteMap>
          {currentPassenger.itinerary.map((destination, index) => {
            const destinationWeather = getDestinationWeather(
              destination.date,
              destination.port
            );
            const activityCount = getActivityCount(destination.port);
            const isVisited = visitedDestinations.includes(destination.port);
            const isFeatured = index === 0 || destination.port === "Nassau"; // Make first destination or Nassau featured

            // Skip "At Sea" days for shore excursions
            if (destination.port === "At Sea") return null;

            return (
              <DestinationCard
                key={`${destination.port}-${destination.date}`}
                visited={isVisited}
                featured={isFeatured}
                onClick={() => handleDestinationClick(destination)}
                data-testid={`destination-${destination.port}`}
              >
                {isVisited && (
                  <FeaturedBadge variant="success" size="sm">
                    ✓ Booked
                  </FeaturedBadge>
                )}

                {isFeatured && !isVisited && (
                  <FeaturedBadge variant="gold" size="sm">
                    ⭐ Featured
                  </FeaturedBadge>
                )}

                <DestinationImage
                  imageUrl={getDestinationImage(destination.port)}
                />

                <DestinationContent>
                  <SalesCallout>Early Bird Special - Save 20%!</SalesCallout>

                  <DestinationHeader>
                    <DestinationName>
                      <MapPin size={20} />
                      {destination.port}
                    </DestinationName>

                    <DestinationDate>
                      <Calendar size={16} />
                      {new Date(destination.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </DestinationDate>
                  </DestinationHeader>

                  {destinationWeather && (
                    <WeatherInfo>
                      <WeatherItem>
                        {getWeatherEmoji(destinationWeather.condition)}
                        {destinationWeather.condition}
                      </WeatherItem>
                      <WeatherItem>
                        <Thermometer size={16} />
                        {destinationWeather.tempC}°C
                      </WeatherItem>
                    </WeatherInfo>
                  )}

                  <ActivityCount>
                    🎯 {activityCount} exclusive excursions available
                  </ActivityCount>

                  <Button size="sm" fullWidth>
                    Explore {destination.port} Excursions
                  </Button>
                </DestinationContent>
              </DestinationCard>
            );
          })}
        </RouteMap>

        <ShipIcon>
          <Logo size="md" hideText />
        </ShipIcon>
      </DestinationsSection>

      <CartSummary>
        <CartHeader>
          <CartTitle>Ready to Complete Your Cruise Package?</CartTitle>
          <CartSubtitle>
            You've selected amazing upgrades! Complete your booking to secure
            these exclusive deals.
          </CartSubtitle>
        </CartHeader>
        <Button
          size="lg"
          fullWidth
          onClick={() => navigate("/guest/cart")}
          data-testid="view-cart-button"
        >
          <ShoppingCart size={20} />
          Complete My Booking
        </Button>
      </CartSummary>
    </MapContainer>
  );
};
