import { Plus } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

type ListDetailProps = {};
export default function ListDetail({}: ListDetailProps) {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View className="flex-1 p-3">
      <Stack.Screen
        options={{
          title: `Edit ${params.slug}`,
        }}
      />
      <Text>{params.slug}</Text>
      <Button
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        variant={"icon"}
        size={"icon"}
      >
        <Plus className="h-5 w-5 text-white" />
      </Button>
    </View>
  );
}
