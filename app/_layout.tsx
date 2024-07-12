import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
          navigationBarColor: "#ffffff",
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
      <PortalHost />
    </SafeAreaProvider>
  );
}
