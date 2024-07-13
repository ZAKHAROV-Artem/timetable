import { DialogsStateCreator } from "@/types/dialogs";

export const addRoomSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((store) => {
      store.addRoom.open = open;
    });
  },
  show: () => {
    set((store) => {
      store.addRoom.open = true;
    });
  },
  hide: () => {
    set((store) => {
      store.addRoom.open = false;
    });
  },
});
