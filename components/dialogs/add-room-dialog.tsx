import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useRoomsStore } from "@/store/user-rooms-store";
import { AddRoomFields, AddRoomSchema } from "@/types/validation/add-room";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import { Input } from "../ui/input";

export default function AddRoomDialog() {
  const { open, setOpen } = useDialogsStore(
    useShallow((state) => ({
      open: state.addRoom.open,
      setOpen: state.addRoom.setOpen,
    })),
  );
  const addRoom = useRoomsStore((state) => state.addRoom);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<AddRoomFields>({
    defaultValues: {
      roomNumber: "",
    },
    resolver: zodResolver(AddRoomSchema),
  });

  const onSubmit: SubmitHandler<AddRoomFields> = (data) => {
    addRoom({
      id: Date.now().toString(),
      roomNumber: data.roomNumber,
    });
    reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add room</DialogTitle>
          <DialogDescription>
            Add new room here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <View>
          <View>
            <Text className="mb-1">Room number</Text>
            <Controller
              control={control}
              name="roomNumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="404"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.roomNumber && (
              <Text className="text-sm text-vivid-red">
                {errors.roomNumber.message}
              </Text>
            )}
          </View>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button onPress={handleSubmit(onSubmit)}>
              <Text>ADD</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
