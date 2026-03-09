import type { FormEvent } from "react";
import { useState } from "react";
import { LilWudApiError } from "@atelierfrancois/lilwud-sdk";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme";

export function AccountScreen() {
  const { status, user, login, logout, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    setError(null);

    try {
      const trimmedEmail = email.trim();
      const trimmedDisplayName = displayName.trim();

      if (!trimmedEmail || !password.trim()) {
        throw new Error("Enter both your email and password.");
      }

      if (mode === "login") {
        await login({ email: trimmedEmail, password });
      } else {
        if (!trimmedDisplayName) {
          throw new Error("Add a display name before creating an account.");
        }

        if (password.trim().length < 8) {
          throw new Error("Use a password with at least 8 characters.");
        }

        await register({ displayName: trimmedDisplayName, email: trimmedEmail, password });
      }
    } catch (nextError) {
      if (nextError instanceof LilWudApiError) {
        setError(nextError.message);
      } else if (nextError instanceof Error) {
        setError(nextError.message);
      } else {
        setError("The request failed. Check the API connection.");
      }
    }
  }

  if (status === "authenticated" && user) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Account</Text>
          <Text style={styles.title}>{user.displayName}</Text>
          <Text style={styles.body}>{user.email}</Text>
          <TouchableOpacity onPress={() => void logout()} style={styles.button}>
            <Text style={styles.buttonLabel}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>Account</Text>
        <View style={styles.toggleRow}>
          <TouchableOpacity
            onPress={() => setMode("login")}
            style={[styles.toggleButton, mode === "login" && styles.toggleButtonActive]}
          >
            <Text style={mode === "login" ? styles.toggleTextActive : styles.toggleText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMode("register")}
            style={[styles.toggleButton, mode === "register" && styles.toggleButtonActive]}
          >
            <Text style={mode === "register" ? styles.toggleTextActive : styles.toggleText}>Register</Text>
          </TouchableOpacity>
        </View>

        {mode === "register" ? (
          <TextInput
            onChangeText={setDisplayName}
            placeholder="Display name"
            placeholderTextColor={colors.sage}
            style={styles.input}
            value={displayName}
          />
        ) : null}

        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={colors.sage}
          style={styles.input}
          value={email}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={colors.sage}
          secureTextEntry
          style={styles.input}
          value={password}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity onPress={() => void handleSubmit()} style={styles.button}>
          <Text style={styles.buttonLabel}>{mode === "login" ? "Sign in" : "Create account"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.paper,
  },
  card: {
    backgroundColor: colors.paperStrong,
    padding: 18,
    borderRadius: 24,
    gap: 12,
  },
  eyebrow: {
    color: colors.coral,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.ink,
  },
  body: {
    color: colors.ink,
    fontSize: 16,
  },
  input: {
    backgroundColor: colors.paper,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.ink,
  },
  toggleRow: {
    flexDirection: "row",
    gap: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: colors.paper,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: colors.ink,
  },
  toggleText: {
    color: colors.ink,
    fontWeight: "700",
  },
  toggleTextActive: {
    color: "white",
    fontWeight: "700",
  },
  button: {
    backgroundColor: colors.coral,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "700",
  },
  error: {
    color: colors.coral,
  },
});
