import "react-native-gesture-handler";

import type { ComponentType, PropsWithChildren } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "@/navigation/RootNavigator";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { colors } from "@/theme";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.paper,
    card: colors.paperStrong,
    primary: colors.coral,
    text: colors.ink,
    border: "rgba(36,57,51,0.08)",
  },
};

const RootView = GestureHandlerRootView as ComponentType<
  PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
>;

export default function App() {
  return (
    <RootView style={styles.app}>
      <SafeAreaProvider>
        <AuthProvider>
          <CartProvider>
            <NavigationContainer theme={navigationTheme}>
              <StatusBar style="dark" />
              <RootNavigator />
            </NavigationContainer>
          </CartProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </RootView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
