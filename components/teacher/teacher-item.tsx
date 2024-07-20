import { useTeachersStore } from "@/store/user-teachers-store";
import { Teacher } from "@/types/lists/teacher";
import { Text } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import { SwipeableDelete } from "../shared/swipeable-delete";

type TeacherItemProps = { item: Teacher };
export default function TeacherItem({ item }: TeacherItemProps) {
  const removeTeacher = useTeachersStore((store) => store.removeTeacher);

  return (
    <SwipeableDelete deleteAction={() => removeTeacher(item.id)}>
      <Animated.View
        exiting={FadeOut.duration(150)}
        className="rounded-lg bg-whisper-white p-3"
      >
        <Text className="text-lg">{item.name}</Text>
      </Animated.View>
    </SwipeableDelete>
  );
}
