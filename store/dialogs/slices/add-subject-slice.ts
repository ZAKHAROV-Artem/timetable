import { DialogsStateCreator } from "@/types/dialogs";

export const addSubjectSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state) => {
      state.addSubject.open = open;
    });
  },
  show: () => {
    set((state) => {
      state.addSubject.open = true;
    });
  },
  hide: () => {
    set((state) => {
      state.addSubject.open = false;
    });
  },
});
