import { cn } from "@/lib/utils";
import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type FadeViewProps = {
  children: React.ReactNode;
  className?: string;
};
export default function FadeView({ children, className }: FadeViewProps) {
  return (
    <View className={cn("flex-1 bg-white p-3")}>
      <Animated.View
        className={cn("flex-1", className)}
        entering={FadeIn}
        exiting={FadeOut}
      >
        {children}
      </Animated.View>
    </View>
  );
}
