import { DialogsStateCreator } from "@/types/dialogs";

export const addRoomSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state) => {
      state.addRoom.open = open;
    });
  },
  show: () => {
    set((state) => {
      state.addRoom.open = true;
    });
  },
  hide: () => {
    set((state) => {
      state.addRoom.open = false;
    });
  },
});
