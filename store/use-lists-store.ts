import { List } from "@/types/lists/list";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  lists: List[];
};

type Actions = {
  setLists: (lists: List[]) => void;
  addList: (list: List) => void;
  removeList: (id: string) => void;
  reset: () => void;
};

const initialState: State = {
  lists: [
    {
      id: "1",
      name: "Teachers",
      slug: "teachers",
    },
    {
      id: "2",
      name: "Rooms",
      slug: "rooms",
    },
    {
      id: "3",
      name: "Subjects",
      slug: "subjects",
    },
  ],
};
export const useListsStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      setLists: (lists: List[]) => {
        set((store) => {
          store.lists = lists;
        });
      },

      addList: (list: List) => {
        set((store) => {
          store.lists.push(list);
        });
      },

      removeList: (id: string) => {
        set((store) => {
          store.lists = store.lists.filter((list) => list.id !== id);
        });
      },

      reset: () => set(initialState),
    })),
    {
      name: "lists-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
