import { AddSubjectDialog } from "@/components/dialogs";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Large } from "@/components/ui/typography";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useSubjectsStore } from "@/store/user-subjects-store";
import { FlashList } from "@shopify/flash-list";
import { Plus } from "lucide-react-native";
import { View } from "react-native";

export default function Subjects() {
  const subjects = useSubjectsStore((state) => state.subjects);
  const showAddSubjectDialog = useDialogsStore(
    (state) => state.addSubject.show,
  );
  return (
    <View className="flex-1 p-3">
      <Large className="text-2xl">Subjects</Large>
      <FlashList
        data={subjects}
        renderItem={({ item }) => <Text className="text-lg">{item.name}</Text>}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
      <Button
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        variant={"icon"}
        size={"icon"}
        onPress={showAddSubjectDialog}
      >
        <Plus className="h-5 w-5 text-white" />
      </Button>
      <AddSubjectDialog />
    </View>
  );
}
