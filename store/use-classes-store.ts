import { Class } from "@/types/class";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  classes: Class[];
};

type Actions = {
  setClasses: (lists: Class[]) => void;
  addClass: (list: Class) => void;
  removeClass: (id: string) => void;
  reset: () => void;
};

const initialState: State = {
  classes: [],
};
export const useClassesStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      setClasses: (classes: Class[]) => {
        set((store) => {
          store.classes = classes;
        });
      },
      addClass: (classItem: Class) => {
        set((store) => {
          store.classes.push(classItem);
        });
      },
      removeClass: (id: string) => {
        set((store) => {
          store.classes = store.classes.filter(
            (classItem) => classItem.id !== id,
          );
        });
      },

      reset: () => set(initialState),
    })),
    {
      name: "classes-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
