import { ScrollView, StyleSheet, Text, View } from "react-native";

import { colors } from "@/theme";

export function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.card, styles.heroCard]}>
        <Text style={styles.eyebrow}>Lil' Wud</Text>
        <Text style={styles.title}>A calm outdoor furniture brand with a quiet little mascot crew.</Text>
        <Text style={styles.body}>
          This app mirrors the web account, basket, and saved-garden flows so parents can revisit planner ideas away from the desktop.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.eyebrow}>The Wudlings say</Text>
        <Text style={styles.subtitle}>Build the 3D garden on the web, then come back here to review, save, and shop.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.eyebrow}>Companion features</Text>
        <Text style={styles.listItem}>Account sign-in and registration</Text>
        <Text style={styles.listItem}>Shared basket pricing from the API</Text>
        <Text style={styles.listItem}>Saved planner projects on the same backend</Text>
      </View>
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
  heroCard: {
    backgroundColor: colors.mist,
  },
  eyebrow: {
    color: colors.coral,
    textTransform: "uppercase",
    letterSpacing: 1.4,
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.ink,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "600",
  },
  body: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 24,
  },
  listItem: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 24,
  },
});
