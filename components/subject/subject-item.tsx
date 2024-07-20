import { useSubjectsStore } from "@/store/user-subjects-store";
import { Subject } from "@/types/lists/subject";
import { Text, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import { SwipeableDelete } from "../shared/swipeable-delete";

type SubjectItemProps = { item: Subject };
export default function SubjectItem({ item }: SubjectItemProps) {
  const removeSubject = useSubjectsStore((store) => store.removeSubject);

  return (
    <SwipeableDelete deleteAction={() => removeSubject(item.id)}>
      <Animated.View
        exiting={FadeOut}
        className="flex flex-row items-center justify-between rounded-lg bg-white p-3"
      >
        <Text className="text-lg">{item.name}</Text>
        <View
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: item.color }}
        />
      </Animated.View>
    </SwipeableDelete>
  );
}
