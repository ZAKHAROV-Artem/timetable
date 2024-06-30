import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { Plus } from "lucide-react-native";
import { useCallback } from "react";
import { AddRoomDialog, AddSubjectDialog, AddTeacherDialog } from ".";
import { Button } from "../ui/button";

type ListsDialogsProps = {
  slug: string;
};
export default function ListsDialogs({ slug }: ListsDialogsProps) {
  const showAddSubjectDialog = useDialogsStore(
    (state) => state.addSubject.show,
  );
  const showAddRoomDialog = useDialogsStore((state) => state.addRoom.show);
  const showAddTeacherDialog = useDialogsStore(
    (state) => state.addTeacher.show,
  );
  const handleShow = () => {
    switch (slug) {
      case "subjects":
        showAddSubjectDialog();
        break;
      case "teachers":
        showAddTeacherDialog();
        break;
      case "rooms":
        showAddRoomDialog();
        break;
      default:
        break;
    }
  };
  const Dialog = () => {
    switch (slug) {
      case "subjects":
        return <AddSubjectDialog />;
      case "teachers":
        return <AddTeacherDialog />;
      case "rooms":
        return <AddRoomDialog />;
      default:
        return null;
    }
  };
  return (
    <>
      <Button
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        variant={"icon"}
        size={"icon"}
        onPress={handleShow}
      >
        <Plus className="h-5 w-5 text-white" />
      </Button>
      <Dialog />
    </>
  );
}
