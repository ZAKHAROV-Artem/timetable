import { AddRoomDialog } from "@/components/dialogs";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Large } from "@/components/ui/typography";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useRoomsStore } from "@/store/user-rooms-store";
import { FlashList } from "@shopify/flash-list";
import { Plus } from "lucide-react-native";
import { View } from "react-native";

export default function Rooms() {
  const rooms = useRoomsStore((state) => state.rooms);
  const showAddRoomDialog = useDialogsStore((state) => state.addRoom.show);

  return (
    <View className="flex-1 p-3">
      <Large className="text-2xl">Rooms</Large>
      <FlashList
        data={rooms}
        renderItem={({ item }) => (
          <Text className="text-lg">{item.number}</Text>
        )}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
      <Button
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        variant={"icon"}
        size={"icon"}
        onPress={showAddRoomDialog}
      >
        <Plus className="h-5 w-5 text-white" />
      </Button>
      <AddRoomDialog />
    </View>
  );
}
