import { Subject } from "@/types/lists/subject";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  subjects: Subject[];
};

type Actions = {
  setSubjects: (subjects: Subject[]) => void;
  addSubject: (subject: Subject) => void;
  removeSubject: (id: string) => void;
};

export const useSubjectsStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      subjects: [],
      setSubjects: (subjects: Subject[]) => {
        set((state) => {
          state.subjects = subjects;
        });
      },
      addSubject: (subject: Subject) => {
        set((state) => {
          state.subjects.push(subject);
        });
      },
      removeSubject: (id: string) => {
        set((state) => {
          state.subjects = state.subjects.filter(
            (subject) => subject.id !== id,
          );
        });
      },
    })),
    {
      name: "subjects-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
