import { Homework } from "@/types/homework";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  homework: Homework[];
};

type Actions = {
  setHomework: (homework: Homework[]) => void;
  addHomework: (homework: Homework) => void;
  setCompleted: (id: string, isCompleted: boolean) => void;
  removeHomework: (id: string) => void;
  reset: () => void;
};

const initialState: State = {
  homework: [],
};
export const useHomeworkStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      setHomework: (homework) => {
        set((state) => {
          state.homework = homework;
        });
      },

      addHomework: (homework) => {
        set((state) => {
          state.homework.push(homework);
        });
      },

      removeHomework: (id) => {
        set((state) => {
          state.homework = state.homework.filter((item) => item.id !== id);
        });
      },

      setCompleted: (id, isCompleted) => {
        set((state) => {
          const index = state.homework.findIndex((item) => item.id === id);
          state.homework[index].isCompleted = isCompleted;
        });
      },

      reset: () => set(initialState),
    })),
    {
      name: "homework-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
