import type { PlannerProjectSummary } from "@atelierfrancois/lilwud-sdk";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { apiClient } from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { colors, radii, shadows } from "@/theme";

export function SavedGardensScreen() {
  const { status } = useAuth();
  const [projects, setProjects] = useState<PlannerProjectSummary[]>([]);

  useEffect(() => {
    if (status !== "authenticated") {
      setProjects([]);
      return;
    }

    let ignore = false;

    async function load() {
      const response = await apiClient.listPlannerProjects();
      if (!ignore) {
        setProjects(response);
      }
    }

    void load();

    return () => {
      ignore = true;
    };
  }, [status]);

  async function removeProject(id: number) {
    await apiClient.deletePlannerProject(id);
    setProjects((current) => current.filter((project) => project.id !== id));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {status !== "authenticated" ? (
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Saved gardens</Text>
          <Text style={styles.title}>Sign in on mobile to see planner work created on the web.</Text>
        </View>
      ) : projects.length ? (
        projects.map((project) => (
          <View key={project.id} style={styles.card}>
            <Text style={styles.eyebrow}>{project.surfaceTheme}</Text>
            <Text style={styles.title}>{project.name}</Text>
            <Text style={styles.body}>{project.summary}</Text>
            <Text style={styles.body}>
              {project.width}m x {project.depth}m
            </Text>
            <TouchableOpacity onPress={() => void removeProject(project.id)} style={styles.linkButton}>
              <Text style={styles.linkLabel}>Delete from account</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Saved gardens</Text>
          <Text style={styles.title}>No saved layouts yet.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: colors.appBg,
  },
  card: {
    backgroundColor: colors.paperStrong,
    padding: 18,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.line,
    gap: 10,
    ...shadows.card,
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
  linkButton: {
    alignSelf: "flex-start",
    paddingVertical: 6,
  },
  linkLabel: {
    color: colors.coral,
    fontWeight: "700",
  },
});
