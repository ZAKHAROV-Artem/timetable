import { AddTeacherDialog } from "@/components/dialogs";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { Large } from "@/components/ui/typography";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useTeachersStore } from "@/store/user-teachers-store";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

export default function Teachers() {
  const teachers = useTeachersStore((state) => state.teachers);
  const showAddTeacherDialog = useDialogsStore(
    (state) => state.addTeacher.show,
  );
  return (
    <View className="flex-1 p-3">
      <Large className="text-2xl">Teachers</Large>
      <FlashList
        data={teachers}
        renderItem={({ item }) => <Text className="text-lg">{item.name}</Text>}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
      <AddButton onPress={showAddTeacherDialog} />
      <AddTeacherDialog />
    </View>
  );
}
