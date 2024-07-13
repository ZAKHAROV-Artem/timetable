import { cn } from "@/lib/utils";
import { Class } from "@/types/class";
import dayjs from "dayjs";
import { Text, View } from "react-native";

export type ClassItemProps = {
  classItem: Class;
};
export default function ClassItem({ classItem }: ClassItemProps) {
  return (
    <View className="flex h-40 flex-row overflow-hidden rounded-3xl bg-whisper-white">
      <View
        className={cn("h-full w-10 rounded-3xl")}
        style={{ backgroundColor: classItem.color }}
      />
      <View className="p-3">
        <Text className="text-2xl font-light text-royal-indigo">
          {dayjs(classItem.classStartsAt).format("HH:mm")} -{" "}
          {dayjs(classItem.classEndsAt).format("HH:mm")}
        </Text>
        <Text className="text-xl font-light text-royal-indigo">
          {classItem.subject}
        </Text>
        <Text className="text-xl font-light text-royal-indigo/50">
          {classItem.teacher}
        </Text>
      </View>
    </View>
  );
}
