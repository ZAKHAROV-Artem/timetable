import FadeView from "@/components/animation/fade-view";
import SafeArea from "@/components/primitives/safe-area";
import { Text } from "react-native";

export default function Homework() {
  return (
    <SafeArea>
      <FadeView>
        <Text>Homework</Text>
      </FadeView>
    </SafeArea>
  );
}
