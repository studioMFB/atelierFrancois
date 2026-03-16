import type { Product } from "@atelierfrancois/lilwud-sdk";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

import { apiClient, getWebBaseUrl } from "@/api/client";
import { FurnitureGlyph } from "@/components/FurnitureGlyph";
import { fallbackProducts } from "@/data/catalog";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { colors, radii, shadows } from "@/theme";

const sceneTones = [
  {
    frame: colors.heading,
    labelBackground: colors.paperStrong,
    labelColor: colors.heading,
    surface: colors.coral,
  },
  {
    frame: colors.ink,
    labelBackground: "#fff7dc",
    labelColor: colors.ink,
    surface: colors.yellow,
  },
  {
    frame: colors.heading,
    labelBackground: "#eef7d4",
    labelColor: colors.ink,
    surface: colors.lime,
  },
] as const;

const sceneLayouts = [
  { left: 18, top: 26 },
  { left: 126, top: 18 },
  { left: 236, top: 86 },
] as const;

export function HomeScreen() {
  const { status, user } = useAuth();
  const { addItem, items, quote } = useCart();
  const [products, setProducts] = useState<Product[]>(() =>
    fallbackProducts.filter((product) => product.isFeatured),
  );

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const response = await apiClient.listProducts();
        if (!ignore) {
          const featured = response.filter((product) => product.isFeatured);
          setProducts(featured.length ? featured : fallbackProducts.filter((product) => product.isFeatured));
        }
      } catch {
        if (!ignore) {
          setProducts(fallbackProducts.filter((product) => product.isFeatured));
        }
      }
    }

    void load();

    return () => {
      ignore = true;
    };
  }, []);

  const featuredProducts = useMemo(
    () => products.filter((product) => product.isFeatured).slice(0, 3),
    [products],
  );
  const basketCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const plannerUrl = `${getWebBaseUrl()}/planner`;
  const firstName = user?.displayName.split(" ")[0] ?? "Sign in";
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [plannerLoading, setPlannerLoading] = useState(false);
  const [plannerError, setPlannerError] = useState<string | null>(null);
  const [plannerVersion, setPlannerVersion] = useState(0);

  function openPlanner() {
    setPlannerError(null);
    setPlannerLoading(true);
    setPlannerVersion((current) => current + 1);
    setPlannerOpen(true);
  }

  function closePlanner() {
    setPlannerOpen(false);
    setPlannerLoading(false);
    setPlannerError(null);
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Current style</Text>
          <Text style={styles.heroTitle}>Calm and playful.</Text>
          <Text style={styles.body}>
            Keep the Lil&apos; Wud garden in your pocket. Review pieces, sync saved layouts, and open
            the full Three.js planner without leaving the app.
          </Text>

          <TouchableOpacity onPress={openPlanner} style={styles.primaryButton}>
            <Text style={styles.primaryButtonLabel}>Open the 3D garden</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.92} onPress={openPlanner} style={styles.sceneCard}>
            <View style={styles.sceneSky} />
            <View style={styles.sceneGlow} />
            <View style={styles.sceneGroundShadow} />
            <View style={styles.sceneGround} />
            <View style={styles.scenePlannerChip}>
              <Text style={styles.scenePlannerChipLabel}>Tap to enter</Text>
            </View>
            <View style={[styles.sceneTree, styles.sceneTreeLeft]}>
              <View style={styles.sceneTreeCanopy} />
              <View style={styles.sceneTreeTrunk} />
            </View>
            <View style={[styles.sceneTree, styles.sceneTreeRight]}>
              <View style={styles.sceneTreeCanopy} />
              <View style={styles.sceneTreeTrunk} />
            </View>
            <View style={styles.sceneMascotCluster}>
              <View style={[styles.sceneMascot, styles.sceneMascotLarge]} />
              <View style={[styles.sceneMascot, styles.sceneMascotMedium]} />
              <View style={[styles.sceneMascot, styles.sceneMascotSmall]} />
            </View>

            {featuredProducts.map((product, index) => {
              const tone = sceneTones[index % sceneTones.length];
              const layout = sceneLayouts[index % sceneLayouts.length];

              return (
                <View
                  key={product.id}
                  style={[
                    styles.scenePiece,
                    {
                      left: layout.left,
                      top: layout.top,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.scenePieceLabel,
                      {
                        backgroundColor: tone.labelBackground,
                      },
                    ]}
                  >
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.scenePieceLabelText,
                        {
                          color: tone.labelColor,
                        },
                      ]}
                    >
                      {product.name}
                    </Text>
                  </View>
                  <FurnitureGlyph frameColor={tone.frame} slug={product.slug} surfaceColor={tone.surface} />
                </View>
              );
            })}
          </TouchableOpacity>
        </View>

        <View style={styles.metricRow}>
          <View style={[styles.metricCard, styles.metricCardLavender]}>
            <Text style={styles.metricLabel}>Basket</Text>
            <Text style={styles.metricValue}>
              {quote ? `£${quote.total.toFixed(0)}` : basketCount ? `${basketCount} pieces` : "Ready"}
            </Text>
            <Text style={styles.metricBody}>
              {basketCount ? "Shared pricing stays synced from the API." : "Add pieces from Shop and price them here."}
            </Text>
          </View>

          <View style={[styles.metricCard, styles.metricCardCream]}>
            <Text style={styles.metricLabel}>Account</Text>
            <Text style={styles.metricValue}>{firstName}</Text>
            <Text style={styles.metricBody}>
              {status === "authenticated"
                ? "Your mobile session is already connected to the same backend."
                : "Sign in to unlock saved gardens and shared basket history."}
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionEyebrow}>Featured pieces</Text>
          <Text style={styles.sectionTitle}>A calmer mobile browse of the current collection.</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.productRow}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {featuredProducts.map((product, index) => {
            const tone = sceneTones[index % sceneTones.length];

            return (
              <View key={product.id} style={styles.productCard}>
                <View
                  style={[
                    styles.productArt,
                    {
                      backgroundColor:
                        index === 0
                          ? colors.lavender
                          : index === 1
                            ? "#fff4d2"
                            : "#edf6dc",
                    },
                  ]}
                >
                  <View style={styles.productArtGround} />
                  <FurnitureGlyph frameColor={tone.frame} slug={product.slug} surfaceColor={tone.surface} />
                </View>
                <Text style={styles.productCategory}>{product.category}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productTagline}>{product.tagline}</Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>£{product.price.toFixed(0)}</Text>
                  <TouchableOpacity
                    onPress={() => addItem(product.id)}
                    style={styles.secondaryButton}
                  >
                    <Text style={styles.secondaryButtonLabel}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.noteCard}>
          <Text style={styles.sectionEyebrow}>Planner note</Text>
          <Text style={styles.noteTitle}>The Three.js planner now stays inside mobile.</Text>
          <Text style={styles.noteBody}>
            The garden still uses the existing web planner build, but it now opens in an in-app viewer
            instead of handing off to Chrome.
          </Text>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        onRequestClose={closePlanner}
        presentationStyle="fullScreen"
        visible={plannerOpen}
      >
        <SafeAreaView style={styles.plannerModal}>
          <View style={styles.plannerModalHeader}>
            <View style={styles.plannerModalCopy}>
              <Text style={styles.plannerModalEyebrow}>3D planner</Text>
              <Text style={styles.plannerModalTitle}>Lil&apos; Wud garden</Text>
            </View>
            <Pressable onPress={closePlanner} style={styles.plannerModalClose}>
              <Text style={styles.plannerModalCloseLabel}>Close</Text>
            </Pressable>
          </View>

          <View style={styles.plannerFrame}>
            <WebView
              key={plannerVersion}
              domStorageEnabled
              javaScriptEnabled
              onError={({ nativeEvent }) => {
                setPlannerError(nativeEvent.description || "The embedded planner could not load.");
                setPlannerLoading(false);
              }}
              onHttpError={({ nativeEvent }) => {
                setPlannerError(`The planner returned ${nativeEvent.statusCode}.`);
                setPlannerLoading(false);
              }}
              onLoadEnd={() => {
                setPlannerLoading(false);
              }}
              onLoadStart={() => {
                setPlannerError(null);
                setPlannerLoading(true);
              }}
              originWhitelist={["*"]}
              setSupportMultipleWindows={false}
              source={{ uri: plannerUrl }}
              style={styles.plannerWebView}
            />

            {plannerLoading ? (
              <View style={styles.plannerOverlay}>
                <ActivityIndicator color={colors.coral} size="large" />
                <Text style={styles.plannerOverlayTitle}>Loading the 3D garden…</Text>
                <Text style={styles.plannerOverlayBody}>
                  The existing planner scene is being embedded inside the mobile app.
                </Text>
              </View>
            ) : null}

            {plannerError ? (
              <View style={styles.plannerOverlay}>
                <Text style={styles.plannerErrorTitle}>Planner unavailable</Text>
                <Text style={styles.plannerOverlayBody}>{plannerError}</Text>
                <TouchableOpacity onPress={openPlanner} style={styles.primaryButton}>
                  <Text style={styles.primaryButtonLabel}>Retry</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 18,
    backgroundColor: colors.appBg,
  },
  heroCard: {
    backgroundColor: colors.paperStrong,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 18,
    gap: 14,
    ...shadows.card,
  },
  eyebrow: {
    color: colors.coral,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontSize: 12,
    fontWeight: "800",
  },
  heroTitle: {
    color: colors.heading,
    fontSize: 38,
    lineHeight: 40,
    fontWeight: "900",
    letterSpacing: -1.2,
    maxWidth: 280,
  },
  body: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 290,
  },
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.coral,
    borderRadius: radii.pill,
    paddingHorizontal: 18,
    paddingVertical: 12,
    ...shadows.float,
  },
  primaryButtonLabel: {
    color: colors.paperStrong,
    fontWeight: "800",
    fontSize: 15,
  },
  sceneCard: {
    height: 270,
    borderRadius: radii.lg,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.lavender,
  },
  sceneSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.lavender,
  },
  sceneGlow: {
    position: "absolute",
    top: 16,
    left: 80,
    width: 180,
    height: 110,
    borderRadius: radii.pill,
    backgroundColor: "rgba(255, 255, 255, 0.44)",
  },
  scenePlannerChip: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 2,
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.lineStrong,
  },
  scenePlannerChipLabel: {
    color: colors.heading,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  sceneGroundShadow: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 30,
    height: 106,
    borderRadius: radii.pill,
    backgroundColor: "#d0d9be",
  },
  sceneGround: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 40,
    height: 110,
    borderRadius: radii.pill,
    backgroundColor: colors.stageSand,
  },
  sceneTree: {
    position: "absolute",
    alignItems: "center",
    gap: 4,
  },
  sceneTreeLeft: {
    left: 14,
    top: 132,
  },
  sceneTreeRight: {
    right: 24,
    top: 86,
  },
  sceneTreeCanopy: {
    width: 34,
    height: 34,
    borderRadius: 18,
    backgroundColor: colors.stageMoss,
  },
  sceneTreeTrunk: {
    width: 8,
    height: 18,
    borderRadius: 6,
    backgroundColor: "#8f7155",
  },
  sceneMascotCluster: {
    position: "absolute",
    right: 28,
    bottom: 52,
    width: 60,
    height: 54,
  },
  sceneMascot: {
    position: "absolute",
    borderRadius: radii.pill,
    backgroundColor: colors.stageMoss,
  },
  sceneMascotLarge: {
    width: 28,
    height: 28,
    left: 0,
    bottom: 6,
  },
  sceneMascotMedium: {
    width: 24,
    height: 24,
    left: 16,
    bottom: 0,
    backgroundColor: colors.sage,
  },
  sceneMascotSmall: {
    width: 22,
    height: 22,
    right: 0,
    top: 0,
    backgroundColor: colors.yellow,
  },
  scenePiece: {
    position: "absolute",
    width: 98,
    alignItems: "center",
    gap: 8,
  },
  scenePieceLabel: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.line,
  },
  scenePieceLabelText: {
    fontSize: 11,
    fontWeight: "700",
  },
  metricRow: {
    gap: 12,
  },
  metricCard: {
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 16,
    gap: 8,
  },
  metricCardLavender: {
    backgroundColor: colors.lavender,
  },
  metricCardCream: {
    backgroundColor: colors.paperStrong,
  },
  metricLabel: {
    color: colors.coral,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontSize: 11,
    fontWeight: "800",
  },
  metricValue: {
    color: colors.heading,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: "900",
    letterSpacing: -0.7,
  },
  metricBody: {
    color: colors.ink,
    fontSize: 14,
    lineHeight: 21,
  },
  sectionHeader: {
    gap: 8,
  },
  sectionEyebrow: {
    color: colors.coral,
    textTransform: "uppercase",
    letterSpacing: 1.3,
    fontSize: 11,
    fontWeight: "800",
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "800",
    letterSpacing: -0.8,
    maxWidth: 290,
  },
  productRow: {
    gap: 14,
    paddingRight: 16,
  },
  productCard: {
    width: 258,
    backgroundColor: colors.paperStrong,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 14,
    gap: 10,
    ...shadows.card,
  },
  productArt: {
    height: 142,
    borderRadius: radii.md,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  productArtGround: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 16,
    height: 54,
    borderRadius: radii.pill,
    backgroundColor: colors.stageSand,
  },
  productCategory: {
    color: colors.coral,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontWeight: "800",
  },
  productName: {
    color: colors.heading,
    fontSize: 24,
    lineHeight: 27,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  productTagline: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 22,
  },
  productFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  productPrice: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "800",
  },
  secondaryButton: {
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: colors.coralSoft,
    borderWidth: 1,
    borderColor: colors.line,
  },
  secondaryButtonLabel: {
    color: colors.coral,
    fontWeight: "800",
  },
  noteCard: {
    backgroundColor: colors.paperStrong,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 18,
    gap: 10,
  },
  noteTitle: {
    color: colors.heading,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  noteBody: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 23,
  },
  plannerModal: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  plannerModalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    backgroundColor: colors.paperStrong,
  },
  plannerModalCopy: {
    gap: 2,
  },
  plannerModalEyebrow: {
    color: colors.coral,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontSize: 11,
    fontWeight: "800",
  },
  plannerModalTitle: {
    color: colors.heading,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "900",
    letterSpacing: -0.6,
  },
  plannerModalClose: {
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.line,
  },
  plannerModalCloseLabel: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  plannerFrame: {
    flex: 1,
    backgroundColor: colors.paperStrong,
  },
  plannerWebView: {
    flex: 1,
    backgroundColor: colors.paperStrong,
  },
  plannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 10,
    backgroundColor: "rgba(255, 253, 247, 0.96)",
  },
  plannerOverlayTitle: {
    color: colors.heading,
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "900",
    letterSpacing: -0.8,
    textAlign: "center",
  },
  plannerErrorTitle: {
    color: colors.coral,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "900",
    letterSpacing: -0.7,
    textAlign: "center",
  },
  plannerOverlayBody: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    maxWidth: 320,
  },
});
