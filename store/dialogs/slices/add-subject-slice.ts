import { DialogsStateCreator } from "@/types/dialogs";

export const addSubjectSlice: DialogsStateCreator = (set) => ({
  open: false,
  setOpen: (open: boolean) => {
    set((store) => {
      store.addSubject.open = open;
    });
  },
  show: () => {
    set((store) => {
      store.addSubject.open = true;
    });
  },
  hide: () => {
    set((store) => {
      store.addSubject.open = false;
    });
  },
});
