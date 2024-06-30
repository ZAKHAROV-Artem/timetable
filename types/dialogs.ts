import { ImmerStateCreator } from "./common";

export type DialogsStore = {
  addSubject: Dialog;
  addRoom: Dialog;
  addTeacher: Dialog;
};

export type Dialog = {
  open: boolean;

  setOpen: (open: boolean) => void;
  show: () => void;
  hide: () => void;
};

export type DialogsStateCreator = ImmerStateCreator<DialogsStore, Dialog>;
