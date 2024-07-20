import { useRoomsStore } from "@/store/user-rooms-store";
import { Room } from "@/types/lists/room";
import { Text } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import { SwipeableDelete } from "../shared/swipeable-delete";

type RoomItemProps = { item: Room };
export default function RoomItem({ item }: RoomItemProps) {
  const removeRoom = useRoomsStore((store) => store.removeRoom);
  return (
    <SwipeableDelete deleteAction={() => removeRoom(item.id)}>
      <Animated.View exiting={FadeOut} className="rounded-lg bg-white p-3">
        <Text className="text-lg">{item.roomNumber}</Text>
      </Animated.View>
    </SwipeableDelete>
  );
}
