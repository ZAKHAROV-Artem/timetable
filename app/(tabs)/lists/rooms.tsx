import { AddRoomDialog } from "@/components/dialogs";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { Large } from "@/components/ui/typography";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useRoomsStore } from "@/store/user-rooms-store";
import { FlashList } from "@shopify/flash-list";
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
          <Text className="text-lg">{item.roomNumber}</Text>
        )}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
      <AddButton onPress={showAddRoomDialog} />
      <AddRoomDialog />
    </View>
  );
}
