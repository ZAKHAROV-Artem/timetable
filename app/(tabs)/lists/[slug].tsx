import ListsDialogs from "@/components/dialogs/lists-dialogs";
import { Text } from "@/components/ui/text";
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

type ListDetailProps = {};
export default function ListDetail({}: ListDetailProps) {
  const params = useLocalSearchParams();
  return (
    <View className="flex-1 p-3">
      <Stack.Screen
        options={{
          title: `Edit ${params.slug}`,
        }}
      />
      <Text>{params.slug}</Text>

      <ListsDialogs slug={params?.slug as string} />
    </View>
  );
}
