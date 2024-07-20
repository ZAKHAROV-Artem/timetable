import { AddRoomDialog } from "@/components/dialogs";
import RoomItem from "@/components/room/room-item";
import { ListEmpty } from "@/components/shared/list-empty";
import { AddButton } from "@/components/ui/buttons";
import { Text } from "@/components/ui/text";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useRoomsStore } from "@/store/user-rooms-store";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

export default function Rooms() {
  const rooms = useRoomsStore((store) => store.rooms);
  const showAddRoomDialog = useDialogsStore((store) => store.addRoom.show);

  return (
    <View className="flex-1 p-3">
      <Text className="text-2xl">Rooms</Text>
      <FlashList
        data={rooms}
        renderItem={({ item }) => <RoomItem key={item.id} item={item} />}
        estimatedItemSize={20}
        ItemSeparatorComponent={() => <View className="h-3" />}
        ListEmptyComponent={() => <ListEmpty>No rooms</ListEmpty>}
      />
      <AddButton onPress={showAddRoomDialog} />
      <AddRoomDialog />
    </View>
  );
}
