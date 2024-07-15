import SafeArea from "@/components/primitives/safe-area";
import { Button } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { useClassesStore } from "@/store/use-classes-store";
import dayjs from "dayjs";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

type ClassDetailsProps = {};
export default function ClassDetails({}: ClassDetailsProps) {
  const { id } = useLocalSearchParams();
  const classItem = useClassesStore((store) =>
    store.classes.find((item) => item.id === id),
  );
  if (!classItem) return null;

  const handleAddHomework = () => {
    alert(`Add homework for ${classItem.subject}`);
  };
  const handleEditClass = () => {
    alert(`Edit class ${classItem.subject}`);
  };
  return (
    <SafeArea>
      <View className="flex flex-1 flex-col justify-between p-6">
        <View>
          <View
            className={cn("h-20 w-full rounded-3xl")}
            style={{ backgroundColor: classItem.color }}
          />
          <View className="flex flex-col gap-10 p-3">
            <View>
              <Text className="text-3xl font-bold text-royal-indigo">
                {classItem.subject}
              </Text>
              <Text className="mt-2 text-xl font-medium text-royal-indigo">
                {classItem.weekDay}{" "}
                {dayjs(classItem.classStartsAt).format("HH:mm")} -{" "}
                {dayjs(classItem.classEndsAt).format("HH:mm")}
              </Text>
              <Text className="mt-1 text-xl font-light text-royal-indigo/70">
                {classItem.teacher}
              </Text>
            </View>
            {/* <View>
              <Text className="text-xl font-semibold text-royal-indigo">
                Class Description
              </Text>
              <Text className="mt-2 text-base font-light text-royal-indigo/80">
                {classItem.description ||
                  "No description available for this class."}
              </Text>
            </View> */}
            <View>
              <Text className="text-xl font-semibold text-royal-indigo">
                Additional Information
              </Text>
              <Text className="mt-2 text-base font-light text-royal-indigo/80">
                Room: {classItem.room || "Not specified"}
              </Text>
              <Text className="mt-1 text-base font-light text-royal-indigo/80">
                Duration:{" "}
                {dayjs(classItem.classEndsAt).diff(
                  dayjs(classItem.classStartsAt),
                  "minute",
                )}{" "}
                minutes
              </Text>
            </View>
            <View>
              <View className="flex flex-row gap-2">
                <Button onPress={handleAddHomework}>
                  <Text>Add homework</Text>
                </Button>
                <Button onPress={handleEditClass}>
                  <Text>Edit class</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
        <Button className="mt-8" onPress={router.back}>
          <Text>Back to classes</Text>
        </Button>
      </View>
    </SafeArea>
  );
}
