import { Pressable, Text } from "react-native";

type DeleteSwipeActionProps = { removeTeacher: () => void };
export default function DeleteSwipeAction({
  removeTeacher,
}: DeleteSwipeActionProps) {
  return (
    <Pressable
      onPress={removeTeacher}
      className="justify-center rounded-lg bg-vivid-red px-3"
    >
      <Text className="text-lg text-white">Delete</Text>
    </Pressable>
  );
}
