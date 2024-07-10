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
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export default function AddRoomDialog() {
  const { open, setOpen } = useDialogsStore(
    useShallow((state) => ({
      open: state.addRoom.open,
      setOpen: state.addRoom.setOpen,
    })),
  );
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
          <Text>hello</Text>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Text>ADD</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
