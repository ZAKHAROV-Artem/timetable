import { StateCreator } from "zustand";

export type ImmerStateCreator<StoreT, SliceT> = StateCreator<
  StoreT,
  [["zustand/immer", never], never],
  [],
  SliceT
>;
