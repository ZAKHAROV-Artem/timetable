import { DialogsStore } from "@/types/dialogs";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { addRoomSlice, addSubjectSlice, addTeacherSlice } from "./slices";

export const useDialogsStore = create<DialogsStore>()(
  immer((...args) => ({
    addSubject: addSubjectSlice(...args),
    addRoom: addRoomSlice(...args),
    addTeacher: addTeacherSlice(...args),
  })),
);
