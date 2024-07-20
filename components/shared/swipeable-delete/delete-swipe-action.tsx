import { cn } from "@/lib/utils";
import { Pressable, Text } from "react-native";

type DeleteSwipeActionProps = { removeTeacher: () => void; className?: string };
export default function DeleteSwipeAction({
  removeTeacher,
  className,
}: DeleteSwipeActionProps) {
  return (
    <Pressable
      onPress={removeTeacher}
      className={cn("justify-center rounded-lg bg-vivid-red px-3", className)}
    >
      <Text className="text-lg text-white">Delete</Text>
    </Pressable>
  );
}
