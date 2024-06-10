import { cn } from "@/lib/utils";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import TabItemIcon from "./tab-item-icon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

type TabItemProps = {
  options: BottomTabNavigationOptions;
  navigation: any;
  route: any;
  isFocused: boolean;
};
export default function TabItem({
  options,
  navigation,
  route,
  isFocused,
}: TabItemProps) {
  const label = options.title || route.name;

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(isFocused ? -10 : 0) }],
  }));
  const textStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(isFocused ? 15 : 40) }],
    opacity: withSpring(isFocused ? 1 : 0),
  }));

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <Pressable
      className="flex flex-1 items-center justify-center"
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      key={route.key}
    >
      <Animated.View style={iconStyle}>
        <TabItemIcon
          route={route}
          className={cn({
            "text-royal-indigo": isFocused,
          })}
        />
      </Animated.View>
      <Animated.Text
        className={cn("absolute", {
          "text-royal-indigo": isFocused,
        })}
        style={textStyle}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
}
