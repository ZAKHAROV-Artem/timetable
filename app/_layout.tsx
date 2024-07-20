import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView>
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
          <Stack.Screen
            name="class/homework/add"
            options={{
              title: "Add homework",
              headerShown: true,
              animation: "slide_from_left",
            }}
          />
        </Stack>
        <PortalHost />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
