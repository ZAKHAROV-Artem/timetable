import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useHomeworkStore } from "@/store/use-homework-store";
import { Homework } from "@/types/homework";
import dayjs from "dayjs";
import { Text, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import { SwipeableDelete } from "../shared/swipeable-delete";

type HomeworkItemProps = {
  item: Homework;
  setCompleted: (id: string, isCompleted: boolean) => void;
};
export default function HomeworkItem({
  item,
  setCompleted,
}: HomeworkItemProps) {
  const removeHomework = useHomeworkStore((store) => store.removeHomework);
  return (
    <SwipeableDelete deleteAction={() => removeHomework(item.id)}>
      <Animated.View
        exiting={FadeOut}
        className={cn("rounded-lg bg-whisper-white p-4 shadow-md", {
          "bg-sky-blue": !item.isCompleted,
          "bg-mint-green": item.isCompleted,
        })}
      >
        <View className="flex flex-row justify-between gap-3">
          <Text className="text-lg font-semibold text-gray-800">
            {item.title}
          </Text>
          <Checkbox
            checked={item.isCompleted}
            onCheckedChange={(value) => setCompleted(item.id, value)}
          />
        </View>
        <Text className="mt-1 text-sm text-gray-600">{item.description}</Text>
        <Text className="mt-2">
          Due: {dayjs(item.dueDate).format("MMMM D, YYYY")}
        </Text>
        <Text className="mt-1">
          Subject: {item.subject} | Teacher: {item.teacher}
        </Text>
      </Animated.View>
    </SwipeableDelete>
  );
}
