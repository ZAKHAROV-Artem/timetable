import { Button } from "@/components/ui/buttons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useDialogsStore } from "@/store/dialogs/use-dialogs-store";
import { useTeachersStore } from "@/store/user-teachers-store";
import {
  AddTeacherSchema,
  AddTeacherSchemaFields,
} from "@/types/validation/add-teacher";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export default function AddTeacherDialog() {
  const { open, setOpen } = useDialogsStore(
    useShallow((state) => ({
      open: state.addTeacher.open,
      setOpen: state.addTeacher.setOpen,
    })),
  );
  const addTeacher = useTeachersStore((state) => state.addTeacher);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<AddTeacherSchemaFields>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(AddTeacherSchema),
  });

  const onSubmit: SubmitHandler<AddTeacherSchemaFields> = (data) => {
    addTeacher({
      id: Date.now().toString(),
      name: data.name,
    });
    reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add teacher</DialogTitle>
          <DialogDescription>
            Add new teacher here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <View>
          <View>
            <Text className="mb-1">Teacher name</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Mr.John Doe"
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
        </View>
        <DialogFooter>
          <Button onPress={handleSubmit(onSubmit)}>
            <Text>ADD</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
