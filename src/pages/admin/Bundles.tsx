import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Plus, Edit, Trash2, Package } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { mockApi } from "@/lib/mockApi";
import { Bundle, Offer } from "@/types";
import { analytics, ANALYTICS_EVENTS } from "@/lib/analytics";
import { t } from "@/lib/i18n";

const BundlesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.navy};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

const BundlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;

const BundleCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const BundleImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.teal},
    ${({ theme }) => theme.colors.gold}
  );
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BundleContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BundleTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BundleDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
`;

const BundlePricing = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BundlePrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.ocean};
`;

const ComparePrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-decoration: line-through;
`;

const Savings = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.success};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BundleItems = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ItemsLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const BundleItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const BundleBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BundleActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const AdminBundles: React.FC = () => {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bundlesData, offersData] = await Promise.all([
          mockApi.getBundles(),
          mockApi.getOffers(),
        ]);
        setBundles(bundlesData);
        setOffers(offersData);
      } catch (error) {
        console.error("Failed to load bundles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    analytics.track(ANALYTICS_EVENTS.PAGE_VIEWED, { page: "admin_bundles" });
  }, []);

  const getOfferTitle = (offerId: string) => {
    const offer = offers.find((o) => o.id === offerId);
    return offer?.title || "Unknown Offer";
  };

  const handleCreateBundle = () => {
    analytics.track(ANALYTICS_EVENTS.BUNDLE_CREATED, {
      source: "admin_bundles",
    });
  };

  const handleEditBundle = (bundle: Bundle) => {
    analytics.track(ANALYTICS_EVENTS.BUNDLE_UPDATED, { bundleId: bundle.id });
  };

  const handleDeleteBundle = async (bundle: Bundle) => {
    if (window.confirm(`Are you sure you want to delete "${bundle.title}"?`)) {
      try {
        await mockApi.deleteBundle(bundle.id);
        setBundles(bundles.filter((b) => b.id !== bundle.id));
        analytics.track(ANALYTICS_EVENTS.BUNDLE_DELETED, {
          bundleId: bundle.id,
        });
      } catch (error) {
        console.error("Failed to delete bundle:", error);
      }
    }
  };

  if (loading) {
    return (
      <BundlesContainer>
        <LoadingState>Loading bundles...</LoadingState>
      </BundlesContainer>
    );
  }

  return (
    <BundlesContainer>
      <Header>
        <Title>{t("admin.bundles.title")}</Title>
        <Button onClick={handleCreateBundle} data-testid="create-bundle-button">
          <Plus size={20} />
          {t("admin.bundles.create")}
        </Button>
      </Header>

      {bundles.length === 0 ? (
        <EmptyState>
          <h3>No bundles created yet</h3>
          <p>Create your first bundle to offer curated packages to guests.</p>
          <Button onClick={handleCreateBundle} style={{ marginTop: "16px" }}>
            <Plus size={20} />
            Create First Bundle
          </Button>
        </EmptyState>
      ) : (
        <BundlesGrid>
          {bundles.map((bundle) => (
            <BundleCard
              key={bundle.id}
              hover
              data-testid={`bundle-card-${bundle.id}`}
            >
              <BundleImage>{bundle.media || "Bundle Package"}</BundleImage>

              <BundleContent>
                <BundleTitle>{bundle.title}</BundleTitle>
                <BundleDescription>{bundle.desc}</BundleDescription>

                <BundlePricing>
                  <BundlePrice>${bundle.bundlePrice}</BundlePrice>
                  <ComparePrice>${bundle.compareAt}</ComparePrice>
                  <Savings>
                    Save ${bundle.compareAt - bundle.bundlePrice}
                  </Savings>
                </BundlePricing>

                <BundleItems>
                  <ItemsLabel>{t("bundle.includes")}:</ItemsLabel>
                  <ItemsList>
                    {bundle.items.map((itemId) => (
                      <BundleItem key={itemId}>
                        <Package size={16} />
                        {getOfferTitle(itemId)}
                      </BundleItem>
                    ))}
                  </ItemsList>
                </BundleItems>

                {bundle.badges && (
                  <BundleBadges>
                    {bundle.badges.map((badge) => (
                      <Badge key={badge} variant="gold" size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </BundleBadges>
                )}
              </BundleContent>

              <BundleActions>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditBundle(bundle)}
                  data-testid={`edit-bundle-${bundle.id}`}
                >
                  <Edit size={16} />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDeleteBundle(bundle)}
                  data-testid={`delete-bundle-${bundle.id}`}
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </BundleActions>
            </BundleCard>
          ))}
        </BundlesGrid>
      )}
    </BundlesContainer>
  );
};
