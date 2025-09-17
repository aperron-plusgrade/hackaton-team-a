import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Minus,
  Plus,
  Trash2,
  CreditCard,
  Star,
  Gift,
  Check,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { useAppStore } from "@/store";
import { analytics, ANALYTICS_EVENTS } from "@/lib/analytics";
import { t } from "@/lib/i18n";
import { theme } from "@/styles/theme";

const CartContainer = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`;

const CartHeader = styled.div`
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

const CartTitle = styled.h1`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["3xl"]};
  }
`;

const CartSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`;

const CartContent = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

const CartItems = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const CartItem = styled(Card)`
  padding: 0;
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid ${theme.colors.gray[200]};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary};
  }
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  width: 120px;
  height: 120px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1));
  }
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ItemType = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-transform: capitalize;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  min-width: 24px;
  text-align: center;
`;

const ItemPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
`;

const CartSummary = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  position: sticky;
  bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const LoyaltySection = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.sunset} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LoyaltyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LoyaltyPoints = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const PaymentButton = styled(Button)<{ selected?: boolean }>`
  ${({ selected, theme }) =>
    selected &&
    `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  `}
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CheckoutButton = styled(Button)<{
  isComplete?: boolean;
  isProcessing?: boolean;
}>`
  margin-top: 16px;
  background: ${({ isComplete, isProcessing }) =>
    isComplete ? "#10B981" : isProcessing ? "#6B7280" : undefined};
  position: relative;
  overflow: hidden;
`;

// Real product data and images
const productData = {
  offers: {
    off_cabana: {
      title: "Sun Deck Cabana",
      description: "Full-day lounger + fruit platter",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Premium Experience",
    },
    off_spa: {
      title: "Couples Massage",
      description: "75-min aromatherapy session",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Spa & Wellness",
    },
    off_wifi: {
      title: "Premium Wi-Fi",
      description: "Unlimited streaming tier",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Connectivity",
    },
    off_dine: {
      title: "Chef's Table",
      description: "7-course tasting menu",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Fine Dining",
    },
    off_kidsclub: {
      title: "Kids Club Unlimited",
      description: "All-week supervised programs",
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Family Activities",
    },
    off_excursion_snorkel: {
      title: "Snorkeling Adventure",
      description: "Guided reef exploration with equipment",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Shore Excursion",
    },
    off_shopping: {
      title: "Duty-Free Shopping Credit",
      description: "$50 credit for onboard shopping",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Shopping & Retail",
    },
    off_fitness: {
      title: "Personal Training Session",
      description: "1-hour session with certified trainer",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Fitness & Wellness",
    },
  },
  bundles: {
    bun_luxury: {
      title: "Luxury Escape",
      description: "Massage + Chef's Table + Premium Wi-Fi",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Premium Package",
    },
    bun_family: {
      title: "Family Adventure",
      description: "Kids Club + Wi-Fi + Beach Day Cabana",
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Family Package",
    },
    bun_romance: {
      title: "Romantic Getaway",
      description: "Couples Massage + Chef's Table + Cabana",
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Romance Package",
    },
    bun_adventure: {
      title: "Adventure Seeker",
      description: "Snorkeling + Fitness + Wi-Fi",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Adventure Package",
    },
  },
};

interface ProductDetails {
  title: string;
  description: string;
  image: string;
  category: string;
}

const getProductDetails = (
  type: "offer" | "bundle",
  id: string
): ProductDetails => {
  const data = type === "offer" ? productData.offers : productData.bundles;
  const product = data[id as keyof typeof data];

  if (product) {
    return product;
  }

  return {
    title: `${type === "bundle" ? "Bundle" : "Offer"} ${id}`,
    description: "Premium cruise experience",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: type === "bundle" ? "Package Deal" : "Individual Offer",
  };
};

const getProductImage = (type: "offer" | "bundle", id: string) => {
  return getProductDetails(type, id).image;
};

export const GuestCart: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    incrementPurchases,
    loyaltyPoints,
    spendLoyaltyPoints,
    addLoyaltyPoints,
  } = useAppStore();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "points">("card");

  const handleQuantityChange = (
    id: string,
    type: "offer" | "bundle",
    newQuantity: number
  ) => {
    updateCartItemQuantity(id, type, newQuantity);
  };

  const handleRemoveItem = (id: string, type: "offer" | "bundle") => {
    removeFromCart(id, type);
  };

  const totalAmount = getCartTotal() * 1.1; // Including taxes
  const pointsRequired = Math.floor(totalAmount * 100); // 100 points per dollar
  const canPayWithPoints = loyaltyPoints >= pointsRequired;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);

    analytics.track(ANALYTICS_EVENTS.CHECKOUT_STARTED, {
      itemCount: cartItems.length,
      totalValue: getCartTotal(),
      paymentMethod,
    });

    // Simulate checkout process with animation
    setTimeout(() => {
      if (paymentMethod === "points") {
        spendLoyaltyPoints(pointsRequired);
      } else {
        // Add loyalty points for card purchases (10% back)
        addLoyaltyPoints(Math.floor(totalAmount * 10));
      }

      incrementPurchases();
      setIsProcessing(false);
      setIsComplete(true);

      analytics.track(ANALYTICS_EVENTS.CHECKOUT_COMPLETED, {
        totalValue: getCartTotal(),
        paymentMethod,
      });

      // Navigate to dashboard after success animation
      setTimeout(() => {
        clearCart();
        navigate("/dashboard");
      }, 2000);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <Header>
          <Title>{t("guest.cart.title")}</Title>
        </Header>

        <EmptyCart>
          <EmptyIcon>🛒</EmptyIcon>
          <h3>{t("cart.empty")}</h3>
          <p>Add some offers to your cart to get started!</p>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Your Premium Selection</CartTitle>
        <CartSubtitle>
          Review and complete your luxury cruise experience
        </CartSubtitle>
      </CartHeader>

      <CartContent>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={`${item.type}-${item.id}`}>
              <ItemImage imageUrl={getProductImage(item.type, item.id)}>
                {!getProductImage(item.type, item.id) &&
                  (item.type === "bundle" ? "📦" : "🎯")}
              </ItemImage>

              <ItemDetails>
                <ItemTitle>
                  {getProductDetails(item.type, item.id).title}
                </ItemTitle>
                <ItemType>
                  {getProductDetails(item.type, item.id).category}
                </ItemType>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginTop: "4px",
                    padding: "16px",
                  }}
                >
                  {getProductDetails(item.type, item.id).description}
                </div>
              </ItemDetails>

              <ItemControls>
                <QuantityControls>
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity + 1
                      )
                    }
                  >
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControls>

                <ItemPrice>
                  ${(item.price * item.quantity).toFixed(2)}
                </ItemPrice>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleRemoveItem(item.id, item.type)}
                >
                  <Trash2 size={16} />
                </Button>
              </ItemControls>
            </CartItem>
          ))}
        </CartItems>
      </CartContent>

      <CartSummary>
        <LoyaltySection>
          <LoyaltyHeader>
            <Star size={20} />
            <span>CruiseMate Rewards</span>
          </LoyaltyHeader>
          <LoyaltyPoints>
            {loyaltyPoints.toLocaleString()} points available
          </LoyaltyPoints>
          {paymentMethod === "points" && (
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              This purchase requires {pointsRequired.toLocaleString()} points
            </div>
          )}
        </LoyaltySection>

        <SummaryRow>
          <span>
            Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
            items)
          </span>
          <span>${getCartTotal().toFixed(2)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Taxes & Fees</span>
          <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>{t("cart.total")}</span>
          <span>
            {paymentMethod === "points"
              ? `${pointsRequired.toLocaleString()} points`
              : `$${totalAmount.toFixed(2)}`}
          </span>
        </SummaryRow>

        <PaymentOptions>
          <PaymentButton
            variant={paymentMethod === "card" ? "primary" : "outline"}
            selected={paymentMethod === "card"}
            onClick={() => setPaymentMethod("card")}
          >
            <CreditCard size={16} />
            Card
          </PaymentButton>
          <PaymentButton
            variant={paymentMethod === "points" ? "primary" : "outline"}
            selected={paymentMethod === "points"}
            onClick={() => setPaymentMethod("points")}
            disabled={!canPayWithPoints}
          >
            <Gift size={16} />
            Points
          </PaymentButton>
        </PaymentOptions>

        <CheckoutButton
          fullWidth
          size="lg"
          onClick={handleCheckout}
          disabled={
            (paymentMethod === "points" && !canPayWithPoints) || isProcessing
          }
          data-testid="checkout-button"
          isComplete={isComplete}
          isProcessing={isProcessing}
        >
          {isComplete ? (
            <>
              <Check size={20} />
              Booking Confirmed!
            </>
          ) : isProcessing ? (
            <>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #ffffff40",
                  borderTop: "2px solid #ffffff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              Processing...
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </>
          ) : paymentMethod === "points" ? (
            <>
              <Gift size={20} />
              Pay with {pointsRequired.toLocaleString()} Points
            </>
          ) : (
            <>
              <CreditCard size={20} />
              Complete Booking ${totalAmount.toFixed(2)}
            </>
          )}
        </CheckoutButton>

        {paymentMethod === "card" && (
          <div
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#666",
              marginTop: "8px",
            }}
          >
            Earn {Math.floor(totalAmount * 10)} loyalty points with this
            purchase!
          </div>
        )}
      </CartSummary>
    </CartContainer>
  );
};
