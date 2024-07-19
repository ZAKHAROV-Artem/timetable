import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
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
        <Stack.Screen
          name="add-class"
          options={{
            title: "Add class",
            headerShown: true,
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="class/edit/[id]"
          options={{
            title: "Edit class",
            headerShown: true,
            animation: "slide_from_right",
          }}
        />
      </Stack>
      <PortalHost />
    </SafeAreaProvider>
  );
}
