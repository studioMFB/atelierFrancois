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
import { fallbackProducts } from "@/data/catalog";
import { useCart } from "@/hooks/useCart";
import { colors } from "@/theme";

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

      {filtered.map((product) => (
        <View key={product.id} style={styles.card}>
          <Text style={styles.eyebrow}>{product.category}</Text>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.body}>{product.tagline}</Text>
          <Text style={styles.body}>{product.description}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>£{product.price.toFixed(0)}</Text>
            <TouchableOpacity onPress={() => addItem(product.id)} style={styles.button}>
              <Text style={styles.buttonLabel}>Add to basket</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: colors.paper,
  },
  card: {
    backgroundColor: colors.paperStrong,
    padding: 18,
    borderRadius: 24,
    gap: 10,
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
    color: colors.ink,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.ink,
  },
  meta: {
    color: colors.sage,
  },
  input: {
    backgroundColor: colors.paper,
    borderRadius: 16,
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
    backgroundColor: colors.coral,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonLabel: {
    color: "white",
    fontWeight: "700",
  },
});
