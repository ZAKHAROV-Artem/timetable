import FadeView from "@/components/animation/fade-view";
import SafeArea from "@/components/primitives/safe-area";
import { Text } from "react-native";

export default function Settings() {
  return (
    <SafeArea>
      <FadeView>
        <Text>Settings</Text>
      </FadeView>
    </SafeArea>
  );
}
