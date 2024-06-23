import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { List } from "@/types/list";
import { zustandStorage } from "./mmkv-storage";

type State = {
  lists: List[];
};

type Actions = {
  setLists: (lists: List[]) => void;
  addList: (list: List) => void;
  removeList: (id: string) => void;
};

export const useListsStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
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

      setLists: (lists: List[]) => {
        set((state) => {
          state.lists = lists;
        });
      },

      addList: (list: List) => {
        set((state) => {
          state.lists.push(list);
        });
      },

      removeList: (id: string) => {
        set((state) => {
          state.lists = state.lists.filter((list) => list.id !== id);
        });
      },
    })),
    {
      name: "lists-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
