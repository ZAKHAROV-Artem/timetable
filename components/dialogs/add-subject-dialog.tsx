import { Button } from "@/components/ui/buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { colors } from "@/data/colors";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useSubjectsStore } from "@/store/user-subjects-store";
import {
  AddSubjectFields,
  AddSubjectShema,
} from "@/types/validation/add-subject";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import { Input } from "../ui/input";
import ColorPicker from "./../ui/color-picker";

export default function AddSubjectDialog() {
  const { open, setOpen } = useDialogsStore(
    useShallow((store) => ({
      open: store.addSubject.open,
      setOpen: store.addSubject.setOpen,
    })),
  );

  const addSubject = useSubjectsStore((store) => store.addSubject);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<AddSubjectFields>({
    defaultValues: {
      name: "",
      color: "",
    },
    resolver: zodResolver(AddSubjectShema),
  });

  const onSubmit: SubmitHandler<AddSubjectFields> = (data) => {
    addSubject({
      id: Date.now().toString(),
      name: data.name,
      color: data.color,
    });
    reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add subject</DialogTitle>
          <DialogDescription>
            Add new subject here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <View className="flex gap-5">
          <View>
            <Text className="mb-1">Subject</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Mathematics"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && (
              <Text className="text-sm text-vivid-red">
                {errors.name.message}
              </Text>
            )}
          </View>
          <View>
            <Text className="mb-1">Color (optional)</Text>
            <Controller
              control={control}
              name="color"
              render={({ field: { onChange, onBlur, value } }) => (
                <ColorPicker
                  colors={colors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </View>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button onPress={handleSubmit(onSubmit)}>
              <Text>ADD</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
