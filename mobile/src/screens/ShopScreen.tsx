import type { Product } from "@atelierfrancois/lilwud-sdk";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { apiClient } from "@/api/client";
import { FurnitureGlyph } from "@/components/FurnitureGlyph";
import { fallbackProducts } from "@/data/catalog";
import { useCart } from "@/hooks/useCart";
import { colors, radii, shadows } from "@/theme";

export function ShopScreen() {
  const { addItem, quote } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const response = await apiClient.listProducts();
        if (!ignore) {
          setProducts(response);
        }
      } catch {
        if (!ignore) {
          setProducts(fallbackProducts);
        }
      }
    }

    void load();

    return () => {
      ignore = true;
    };
  }, []);

  const filtered = products.filter((product) => {
    const needle = search.trim().toLowerCase();
    return (
      !needle ||
      product.name.toLowerCase().includes(needle) ||
      product.description.toLowerCase().includes(needle)
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>Shop</Text>
        <TextInput
          onChangeText={setSearch}
          placeholder="Search furniture"
          placeholderTextColor={colors.sage}
          style={styles.input}
          value={search}
        />
        <Text style={styles.meta}>
          Basket total {quote ? `£${quote.total.toFixed(0)}` : "will update from the API"}
        </Text>
      </View>

      {filtered.map((product, index) => {
        const tone = getArtTone(index);

        return (
          <View key={product.id} style={styles.card}>
            <View style={[styles.art, { backgroundColor: tone.artBackground }]}>
              <View style={[styles.artGround, { backgroundColor: tone.ground }]} />
              <FurnitureGlyph
                frameColor={tone.frame}
                slug={product.slug}
                surfaceColor={tone.surface}
              />
            </View>
            <Text style={styles.eyebrow}>{product.category}</Text>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.body}>{product.tagline}</Text>
            <View style={styles.row}>
              <Text style={styles.price}>£{product.price.toFixed(0)}</Text>
              <TouchableOpacity onPress={() => addItem(product.id)} style={styles.button}>
                <Text style={styles.buttonLabel}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

function getArtTone(index: number) {
  if (index % 3 === 0) {
    return {
      artBackground: "#eef7d7",
      frame: colors.heading,
      ground: colors.stageSand,
      surface: colors.lime,
    };
  }

  if (index % 3 === 1) {
    return {
      artBackground: colors.lavender,
      frame: colors.heading,
      ground: colors.stageSand,
      surface: colors.coral,
    };
  }

  return {
    artBackground: "#fff4d8",
    frame: colors.ink,
    ground: colors.stageSand,
    surface: colors.yellow,
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: colors.appBg,
  },
  card: {
    backgroundColor: colors.paperStrong,
    padding: 16,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.line,
    gap: 10,
    ...shadows.card,
  },
  art: {
    height: 164,
    borderRadius: radii.md,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  artGround: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 28,
    height: 88,
    borderRadius: radii.pill,
  },
  eyebrow: {
    color: colors.coral,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.heading,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.ink,
  },
  meta: {
    color: colors.textMuted,
  },
  input: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: colors.line,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.ink,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.ink,
  },
  button: {
    backgroundColor: colors.coralSoft,
    borderRadius: radii.pill,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.line,
  },
  buttonLabel: {
    color: colors.coral,
    fontWeight: "800",
  },
});
