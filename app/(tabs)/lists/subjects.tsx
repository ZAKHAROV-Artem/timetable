import { AddSubjectDialog } from "@/components/dialogs";
import SubjectItem from "@/components/subject/subject-item";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
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
      <Text className="mb-5 text-2xl">Subjects</Text>
      <FlashList
        data={subjects}
        renderItem={({ item }) => <SubjectItem item={item} />}
        estimatedItemSize={20}
        ItemSeparatorComponent={() => <View className="h-3" />}
      />
      <AddButton onPress={showAddSubjectDialog} />
      <AddSubjectDialog />
    </View>
  );
}
