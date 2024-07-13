import { cn } from "@/lib/utils";
import { Pressable, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type ColorPickerProps = {
  colors: string[];
  value: string;
  onChange: (color: string) => void;
};
export default function ColorPicker({
  colors,
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <View className="flex flex-row flex-wrap gap-1">
      {colors.map((color) => (
        <Pressable
          key={color}
          className={cn("flex h-8 w-8 items-center justify-center rounded-sm")}
          style={{ backgroundColor: color }}
          onPress={() => onChange(color === value ? "" : color)}
        >
          {value === color && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              className="h-4 w-4 rounded-full bg-white"
            />
          )}
        </Pressable>
      ))}
    </View>
  );
}
