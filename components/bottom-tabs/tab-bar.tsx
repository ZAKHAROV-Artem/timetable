import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabItem from "./tab-item";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="absolute bottom-5 left-5 right-5 flex flex-row overflow-hidden rounded-full border bg-white px-4">
      {state.routes.map(
        (route, index) =>
          route.key && (
            <TabItem
              options={descriptors[route.key].options}
              navigation={navigation}
              route={route}
              isFocused={state.index === index}
              key={route.key}
            />
          ),
      )}
    </View>
  );
}
