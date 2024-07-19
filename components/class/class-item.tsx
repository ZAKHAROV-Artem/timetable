import { cn } from "@/lib/utils";
import { Class } from "@/types/class";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export type ClassItemProps = {
  classItem: Class;
};
export default function ClassItem({ classItem }: ClassItemProps) {
  return (
    <Link asChild href={`/class/${classItem.id}`}>
      <Pressable className="flex h-40 w-full flex-row overflow-hidden rounded-3xl bg-whisper-white">
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
            {classItem.subject} {classItem.room}
          </Text>
          <Text className="text-xl font-light text-royal-indigo/50">
            {classItem.teacher}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
