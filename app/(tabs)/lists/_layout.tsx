import { Stack } from "expo-router";

type ListsLayoutProps = {};
export default function ListsLayout({ ...props }: ListsLayoutProps) {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[slug]" />
    </Stack>
  );
}
