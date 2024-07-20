import { AddTeacherDialog } from "@/components/dialogs";
import TeacherItem from "@/components/teacher/teacher-item";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useTeachersStore } from "@/store/user-teachers-store";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

export default function Teachers() {
  const teachers = useTeachersStore((store) => store.teachers);
  const showAddTeacherDialog = useDialogsStore(
    (store) => store.addTeacher.show,
  );
  return (
    <View className="flex-1 p-3">
      <Text className="text-2xl">Teachers</Text>
      <FlashList
        data={teachers}
        renderItem={({ item }) => <TeacherItem item={item} />}
        estimatedItemSize={20}
        ItemSeparatorComponent={() => <View className="h-3" />}
      />
      <AddButton onPress={showAddTeacherDialog} />
      <AddTeacherDialog />
    </View>
  );
}
