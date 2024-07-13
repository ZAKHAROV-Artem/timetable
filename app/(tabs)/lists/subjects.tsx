import { AddSubjectDialog } from "@/components/dialogs";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { Large } from "@/components/ui/typography";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useSubjectsStore } from "@/store/user-subjects-store";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

export default function Subjects() {
  const subjects = useSubjectsStore((store) => store.subjects);
  const showAddSubjectDialog = useDialogsStore(
    (store) => store.addSubject.show,
  );
  return (
    <View className="flex-1 p-3">
      <Large className="mb-5 text-2xl">Subjects</Large>
      <FlashList
        data={subjects}
        renderItem={({ item }) => (
          <View className="flex flex-row items-center justify-between">
            <Text className="text-lg">{item.name}</Text>
            <View
              className="h-5 w-5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </View>
        )}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-[2px] rounded-full bg-gray-300" />
        )}
      />
      <AddButton onPress={showAddSubjectDialog} />
      <AddSubjectDialog />
    </View>
  );
}
