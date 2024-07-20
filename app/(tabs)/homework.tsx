import FadeView from "@/components/animation/fade-view";
import { HomeworkItem } from "@/components/homework";
import SafeArea from "@/components/primitives/safe-area";
import { ListEmpty } from "@/components/shared/list-empty";
import { Text } from "@/components/ui/text";
import { useHomeworkStore } from "@/store/use-homework-store";
import { FlashList } from "@shopify/flash-list";
import dayjs from "dayjs";
import { View } from "react-native";

export default function Homework() {
  const homework = useHomeworkStore((store) => {
    const incompleteHomework = store.homework.filter(
      (item) => !item.isCompleted,
    );
    const completedHomework = store.homework.filter((item) => item.isCompleted);

    incompleteHomework.sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));
    completedHomework.sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));

    return [...incompleteHomework, ...completedHomework];
  });
  const setCompleted = useHomeworkStore((store) => store.setCompleted);
  return (
    <SafeArea>
      <FadeView>
        <Text className="text-2xl font-bold text-gray-800">Homework</Text>

        <FlashList
          data={homework}
          renderItem={({ item }) => (
            <HomeworkItem
              key={item.id}
              item={item}
              setCompleted={setCompleted}
            />
          )}
          estimatedItemSize={100}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListEmptyComponent={() => <ListEmpty>No homework</ListEmpty>}
        />
      </FadeView>
    </SafeArea>
  );
}
