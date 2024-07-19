import { Class } from "@/types/class";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  classes: Class[];
};

type Actions = {
  setClasses: (classes: Class[]) => void;
  addClass: (classItem: Class) => void;
  editClass: (classItem: Class) => void;
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

      editClass: (classItem: Class) => {
        set((store) => {
          const index = store.classes.findIndex(
            (item) => item.id === classItem.id,
          );
          store.classes[index] = classItem;
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
