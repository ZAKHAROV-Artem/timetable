import { Stack } from "expo-router";

type ListsLayoutProps = {};
export default function ListsLayout({ ...props }: ListsLayoutProps) {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Lists" }} />
      <Stack.Screen name="teachers" options={{ title: "Edit teachers" }} />
      <Stack.Screen name="rooms" options={{ title: "Edit rooms" }} />
      <Stack.Screen name="subjects" options={{ title: "Edit subjects" }} />
    </Stack>
  );
}
