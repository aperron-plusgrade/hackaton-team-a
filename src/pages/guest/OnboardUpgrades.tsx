import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ArrowRight,
  Star,
  Zap,
  Gift,
  Bed,
  Wine,
  Utensils,
  Waves,
  Check,
  ShoppingCart,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { useAppStore } from "@/store";
import { theme } from "@/styles/theme";

const UpgradesContainer = styled.div`
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
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TimerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.sunset};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  animation: pulse 2s infinite;

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

const OffersSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;

const OfferCard = styled(Card)<{ featured?: boolean }>`
  padding: 0;
  overflow: hidden;
  border: 2px solid
    ${({ featured, theme }) =>
      featured ? theme.colors.sunset : theme.colors.gray[200]};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const OfferImage = styled.div<{ imageUrl: string }>`
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

const OfferContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const OfferHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const OfferTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const OfferDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CurrentPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const OriginalPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-decoration: line-through;
`;

const Savings = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.lg} 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const FeaturedBadge = styled(Badge)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: 2;
`;

const CartSummary = styled(Card)`
  position: sticky;
  bottom: ${({ theme }) => theme.spacing.lg};
  margin: 0 ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CartTotal = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const CartSavings = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.success};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  imageUrl: string;
  features: string[];
  featured?: boolean;
}

export const OnboardUpgrades: React.FC = () => {
  const navigate = useNavigate();
  const { selectedActivityTypes, addToCart } = useAppStore();
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    // Generate personalized offers based on selected interests
    const generateOffers = () => {
      const baseOffers: Offer[] = [
        // Room Upgrades
        {
          id: "balcony-upgrade",
          title: "Ocean View Balcony Suite",
          description:
            "Upgrade to a spacious balcony suite with panoramic ocean views, priority boarding, and dedicated concierge service.",
          price: 299,
          originalPrice: 399,
          category: "accommodation",
          imageUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "Private ocean view balcony",
            "Priority boarding & disembarkation",
            "24/7 room service included",
            "Premium bath amenities",
          ],
          featured: true,
        },

        // Dining Packages
        {
          id: "specialty-dining",
          title: "Culinary Excellence Package",
          description:
            "Unlimited access to all specialty restaurants featuring world-class cuisine from renowned chefs.",
          price: 199,
          originalPrice: 299,
          category: "dining",
          imageUrl:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "All specialty restaurants included",
            "Chef's table experiences",
            "Wine pairing dinners",
            "Priority reservations",
          ],
        },

        // Beverage Packages
        {
          id: "premium-beverage",
          title: "Premium Beverage Collection",
          description:
            "Curated selection of premium wines, craft cocktails, and artisanal beverages throughout your voyage.",
          price: 159,
          originalPrice: 219,
          category: "beverage",
          imageUrl:
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "Premium wine & champagne",
            "Craft cocktails & spirits",
            "Specialty coffee & teas",
            "In-suite beverage service",
          ],
        },
      ];

      // Add ONE category-specific offer based on primary interest (limit to 4-5 total)
      const categoryOffers: Offer[] = [];

      if (selectedActivityTypes.includes("relaxation")) {
        categoryOffers.push({
          id: "spa-package",
          title: "Serenity Spa & Wellness Retreat",
          description:
            "Indulge in our comprehensive wellness experience with unlimited spa access and premium treatments.",
          price: 249,
          originalPrice: 349,
          category: "wellness",
          imageUrl:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "Unlimited thermal suite access",
            "Three signature treatments",
            "Private relaxation areas",
            "Wellness consultation included",
          ],
          featured: true,
        });
      } else if (selectedActivityTypes.includes("adventure")) {
        categoryOffers.push({
          id: "adventure-package",
          title: "Adventure Sports Collection",
          description:
            "Access to all premium adventure activities and exclusive adrenaline experiences.",
          price: 179,
          originalPrice: 249,
          category: "adventure",
          imageUrl:
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "Rock climbing & zip-line",
            "Surf simulator sessions",
            "Adventure equipment included",
            "Professional instruction",
          ],
        });
      } else if (selectedActivityTypes.includes("entertainment")) {
        categoryOffers.push({
          id: "vip-entertainment",
          title: "VIP Entertainment Experience",
          description:
            "Exclusive access to premium shows, meet & greets, and VIP entertainment events.",
          price: 199,
          originalPrice: 279,
          category: "entertainment",
          imageUrl:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: [
            "Premium theater seating",
            "Artist meet & greet access",
            "Exclusive VIP events",
            "Behind-the-scenes tours",
          ],
        });
      }

      // Return only 4 offers maximum to avoid overwhelming
      return [...baseOffers, ...categoryOffers].slice(0, 4);
    };

    setOffers(generateOffers());
  }, [selectedActivityTypes]);

  const handleOfferToggle = (offerId: string) => {
    setSelectedOffers((prev) =>
      prev.includes(offerId)
        ? prev.filter((id) => id !== offerId)
        : [...prev, offerId]
    );
  };

  const selectedOfferDetails = offers.filter((offer) =>
    selectedOffers.includes(offer.id)
  );
  const totalPrice = selectedOfferDetails.reduce(
    (sum, offer) => sum + offer.price,
    0
  );
  const totalSavings = selectedOfferDetails.reduce(
    (sum, offer) => sum + (offer.originalPrice - offer.price),
    0
  );

  const handleContinue = () => {
    // Add selected offers to cart
    selectedOfferDetails.forEach((offer) => {
      addToCart({
        id: offer.id,
        type: "offer",
        quantity: 1,
        price: offer.price,
      });
    });

    // Navigate to trip map to continue the sales journey
    navigate("/guest/trip-map");
  };

  return (
    <UpgradesContainer>
      <HeroSection>
        <TimerBadge
          style={{
            background: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
            boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
          }}
        >
          Limited Time - Exclusive Offers
        </TimerBadge>
        <HeroTitle>Curated Premium Experiences</HeroTitle>
        <HeroSubtitle>
          Handpicked luxury upgrades tailored to your preferences
        </HeroSubtitle>
      </HeroSection>

      <OffersSection>
        <SectionTitle>Premium Selections Curated for You</SectionTitle>

        <OfferGrid>
          {offers.map((offer) => (
            <OfferCard key={offer.id} featured={offer.featured}>
              {offer.featured && (
                <FeaturedBadge variant="gold" size="sm">
                  ⭐ Most Popular
                </FeaturedBadge>
              )}

              <OfferImage imageUrl={offer.imageUrl} />

              <OfferContent>
                <OfferHeader>
                  <div>
                    <OfferTitle>{offer.title}</OfferTitle>
                    <OfferDescription>{offer.description}</OfferDescription>
                  </div>
                </OfferHeader>

                <FeatureList>
                  {offer.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check size={16} color="#10B981" />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>

                <PriceSection>
                  <CurrentPrice>${offer.price}</CurrentPrice>
                  <OriginalPrice>${offer.originalPrice}</OriginalPrice>
                  <Savings>Save ${offer.originalPrice - offer.price}</Savings>
                </PriceSection>

                <Button
                  fullWidth
                  size="lg"
                  variant={
                    selectedOffers.includes(offer.id) ? "primary" : "outline"
                  }
                  onClick={() => handleOfferToggle(offer.id)}
                >
                  {selectedOffers.includes(offer.id) ? (
                    <>
                      <Check size={16} />
                      Added to Package
                    </>
                  ) : (
                    <>
                      <Gift size={16} />
                      Add to Package
                    </>
                  )}
                </Button>
              </OfferContent>
            </OfferCard>
          ))}
        </OfferGrid>
      </OffersSection>

      {selectedOffers.length > 0 && (
        <CartSummary>
          <CartHeader>
            <div>
              <CartTotal>${totalPrice}</CartTotal>
              <CartSavings>You save ${totalSavings}!</CartSavings>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "14px", color: "#666" }}>
                {selectedOffers.length} upgrade
                {selectedOffers.length > 1 ? "s" : ""} selected
              </div>
            </div>
          </CartHeader>

          <Button fullWidth size="lg" onClick={handleContinue}>
            <ShoppingCart size={16} />
            Continue to Shore Excursions
            <ArrowRight size={16} />
          </Button>
        </CartSummary>
      )}

      {selectedOffers.length === 0 && (
        <div style={{ padding: "0 16px", marginBottom: "20px" }}>
          <Button
            fullWidth
            size="lg"
            variant="outline"
            onClick={handleContinue}
          >
            Skip Upgrades - Continue to Activities
            <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </UpgradesContainer>
  );
};
