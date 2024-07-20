import { Text, View } from "react-native";

type ListEmptyProps = { children: React.ReactNode };
export default function ListEmpty({ children }: ListEmptyProps) {
  return (
    <View className="flex-1 items-center justify-center rounded-lg p-3">
      <Text className="text-xl font-extralight uppercase text-royal-indigo">
        {children}
      </Text>
    </View>
  );
}
