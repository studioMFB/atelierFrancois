import { StyleSheet, View } from "react-native";

interface FurnitureGlyphProps {
  frameColor: string;
  slug: string;
  surfaceColor: string;
}

export function FurnitureGlyph({
  frameColor,
  slug,
  surfaceColor,
}: FurnitureGlyphProps) {
  if (slug === "atelier-table") {
    return (
      <View style={styles.frame}>
        <View style={[styles.tableTop, { backgroundColor: surfaceColor }]} />
        <View style={styles.legRow}>
          <View style={[styles.leg, { backgroundColor: frameColor }]} />
          <View style={[styles.leg, { backgroundColor: frameColor }]} />
          <View style={[styles.leg, { backgroundColor: frameColor }]} />
        </View>
      </View>
    );
  }

  if (slug === "nest-reading-nook") {
    return (
      <View style={styles.frame}>
        <View style={[styles.nookRoof, { borderColor: frameColor }]} />
        <View style={styles.nookBodyRow}>
          <View style={[styles.leg, { backgroundColor: frameColor }]} />
          <View style={[styles.nookPanel, { backgroundColor: surfaceColor }]} />
          <View style={[styles.leg, { backgroundColor: frameColor }]} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.frame}>
      <View style={[styles.benchSeat, { backgroundColor: surfaceColor }]} />
      <View style={[styles.benchBack, { backgroundColor: surfaceColor }]} />
      <View style={styles.legRow}>
        <View style={[styles.leg, { backgroundColor: frameColor }]} />
        <View style={[styles.leg, { backgroundColor: frameColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: 92,
    height: 62,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
  },
  tableTop: {
    width: 86,
    height: 20,
    borderRadius: 8,
  },
  benchSeat: {
    width: 74,
    height: 18,
    borderRadius: 8,
  },
  benchBack: {
    width: 48,
    height: 12,
    borderRadius: 8,
    marginBottom: -6,
  },
  legRow: {
    width: 78,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leg: {
    width: 10,
    height: 28,
    borderRadius: 6,
  },
  nookRoof: {
    width: 72,
    height: 28,
    borderWidth: 10,
    borderBottomWidth: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  nookBodyRow: {
    width: 84,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  nookPanel: {
    width: 42,
    height: 28,
    borderRadius: 8,
  },
});
