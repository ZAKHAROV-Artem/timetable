import { Room } from "@/types/lists/room";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { zustandStorage } from "./mmkv-storage";

type State = {
  rooms: Room[];
};

type Actions = {
  setRooms: (rooms: Room[]) => void;
  addRoom: (room: Room) => void;
  removeRoom: (id: string) => void;
  reset: () => void;
};

const initialState: State = {
  rooms: [],
};

export const useRoomsStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      setRooms: (rooms: Room[]) => {
        set((store) => {
          store.rooms = rooms;
        });
      },

      addRoom: (room: Room) => {
        set((store) => {
          store.rooms.push(room);
        });
      },

      removeRoom: (id: string) => {
        set((store) => {
          store.rooms = store.rooms.filter((room) => room.id !== id);
        });
      },

      reset: () => set(initialState),
    })),
    {
      name: "rooms-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
