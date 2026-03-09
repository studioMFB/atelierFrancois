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
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.paperStrong,
        },
        headerTitleStyle: {
          color: colors.ink,
          fontWeight: "700",
        },
        tabBarActiveTintColor: colors.coral,
        tabBarInactiveTintColor: colors.sage,
        tabBarStyle: {
          backgroundColor: colors.paperStrong,
          borderTopColor: "rgba(36,57,51,0.08)",
        },
      }}
    >
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={ShopScreen} name="Shop" />
      <Tab.Screen component={SavedGardensScreen} name="Saved" />
      <Tab.Screen component={AccountScreen} name="Account" />
    </Tab.Navigator>
  );
}
