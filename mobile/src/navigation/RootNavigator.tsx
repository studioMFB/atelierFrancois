import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountScreen } from "@/screens/AccountScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { SavedGardensScreen } from "@/screens/SavedGardensScreen";
import { ShopScreen } from "@/screens/ShopScreen";
import { colors } from "@/theme";

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.paperStrong,
        },
        headerTitleStyle: {
          color: colors.heading,
          fontWeight: "800",
          fontSize: 28,
        },
        tabBarActiveTintColor: colors.heading,
        tabBarInactiveTintColor: colors.sage,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: 4,
        },
        tabBarStyle: {
          backgroundColor: colors.paperStrong,
          borderTopColor: colors.line,
          borderTopWidth: 1,
          height: 74,
          paddingTop: 6,
          paddingBottom: 8,
        },
        tabBarIcon: ({ color, focused, size }) => {
          const iconName =
            route.name === "Home"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Shop"
                ? focused
                  ? "bag"
                  : "bag-outline"
                : route.name === "Saved"
                  ? focused
                    ? "bookmark"
                    : "bookmark-outline"
                  : focused
                    ? "person-circle"
                    : "person-circle-outline";

          return <Ionicons color={color} name={iconName} size={size ?? 22} />;
        },
      })}
    >
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={ShopScreen} name="Shop" />
      <Tab.Screen component={SavedGardensScreen} name="Saved" />
      <Tab.Screen component={AccountScreen} name="Account" />
    </Tab.Navigator>
  );
}
