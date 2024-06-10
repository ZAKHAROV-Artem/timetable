import { Tabs } from "expo-router";
import { TabBar } from "@/components/bottom-tabs";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Timetable",
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: "Lists",
        }}
      />
      <Tabs.Screen
        name="homework"
        options={{
          title: "Homework",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
