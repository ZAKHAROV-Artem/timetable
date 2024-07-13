import { DialogsStateCreator } from "@/types/dialogs";

export const addTeacherSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((store) => {
      store.addTeacher.open = open;
    });
  },
  show: () => {
    set((store) => {
      store.addTeacher.open = true;
    });
  },
  hide: () => {
    set((store) => {
      store.addTeacher.open = false;
    });
  },
});
