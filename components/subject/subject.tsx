import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

export default function Subject() {
  const random = Math.round(Math.random() * 2);
  const bg = ["bg-sky-blue", "bg-peach-blush", "bg-cotton-candy"][random];
  return (
    <View className="flex h-40 flex-row overflow-hidden rounded-3xl bg-whisper-white">
      <View className={cn("h-full w-10 rounded-3xl", bg)} />
      <View className="p-3">
        <Text className="text-2xl font-light text-royal-indigo">
          12:00 - 13:00
        </Text>
        <Text className="text-xl font-light text-royal-indigo">
          Mathematics
        </Text>
        <Text className="text-xl font-light text-royal-indigo/50">
          Robert marting
        </Text>
      </View>
    </View>
  );
}
