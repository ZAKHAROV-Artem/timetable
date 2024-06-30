import { DialogsStateCreator } from "@/types/dialogs";

export const addTeacherSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state) => {
      state.addTeacher.open = open;
    });
  },
  show: () => {
    set((state) => {
      state.addTeacher.open = true;
    });
  },
  hide: () => {
    set((state) => {
      state.addTeacher.open = false;
    });
  },
});
