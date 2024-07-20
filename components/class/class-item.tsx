import { weekdays } from "@/data/weekdays";
import { cn } from "@/lib/utils";
import { Class } from "@/types/class";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export type ClassItemProps = {
  classItem: Class;
};
export default function ClassItem({ classItem }: ClassItemProps) {
  const [progress, setProgress] = useState(0);

  const today = dayjs().format("dddd");
  const todayIndex = weekdays.indexOf(today);
  const classDayIndex = weekdays.indexOf(classItem.weekDay);

  useEffect(() => {
    if (todayIndex !== classDayIndex) {
      setProgress(0);
      return;
    }
    const updateProgress = () => {
      const now = dayjs();
      const start = dayjs()
        .set("hour", dayjs(classItem.classStartsAt).hour())
        .set("minute", dayjs(classItem.classStartsAt).minute());
      const end = dayjs()
        .set("hour", dayjs(classItem.classEndsAt).hour())
        .set("minute", dayjs(classItem.classEndsAt).minute());
      const duration = end.diff(start);
      const elapsed = now.diff(start);
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);
    };

    const getNextMinuteDelay = () => {
      const now = new Date();
      return 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    };

    updateProgress();

    const initialDelay = getNextMinuteDelay();
    const timeout = setTimeout(() => {
      updateProgress();
      const interval = setInterval(updateProgress, 60000);
      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [
    classItem.classStartsAt,
    classItem.classEndsAt,
    todayIndex,
    classDayIndex,
  ]);

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
        <View
          className="absolute bottom-0 left-0 h-2 bg-green-500"
          style={{ width: `${progress}%` }}
        />
      </Pressable>
    </Link>
  );
}
