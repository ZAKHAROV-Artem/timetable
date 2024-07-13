import { Teacher } from "@/types/lists/teacher";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  teachers: Teacher[];
};

type Actions = {
  setTeachers: (teachers: Teacher[]) => void;
  addTeacher: (teacher: Teacher) => void;
  removeTeacher: (id: string) => void;
};

export const useTeachersStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      teachers: [],
      setTeachers: (teachers: Teacher[]) => {
        set((store) => {
          store.teachers = teachers;
        });
      },
      addTeacher: (teacher: Teacher) => {
        set((store) => {
          store.teachers.push(teacher);
        });
      },
      removeTeacher: (id: string) => {
        set((store) => {
          store.teachers = store.teachers.filter(
            (teacher) => teacher.id !== id,
          );
        });
      },
    })),
    {
      name: "teachers-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
