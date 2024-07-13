import SafeArea from "@/components/primitives/safe-area";
import { Button } from "@/components/ui/buttons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { useRoomsStore } from "@/store/user-rooms-store";
import { useTeachersStore } from "@/store/user-teachers-store";
import { AddClassFields, AddClassSchema } from "@/types/validation/add-class";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

const weekDays = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];
type AddClassProps = {};
export default function AddClass({}: AddClassProps) {
  const teachers = useTeachersStore((state) => state.teachers);
  const rooms = useRoomsStore((state) => state.rooms);

  const { control, handleSubmit } = useForm<AddClassFields>({
    resolver: zodResolver(AddClassSchema),
  });

  const onSubmit: SubmitHandler<AddClassFields> = (data) => {
    console.log(data);
  };

  return (
    <View className="px-2 py-5">
      <View className="flex gap-2">
        <Controller
          control={control}
          name="weekDay"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger
                className={cn({
                  "border-mint-green": value,
                  "border-vivid-red": error,
                })}
              >
                <SelectValue placeholder="Select a weekday" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {weekDays.map((day) => (
                  <SelectItem
                    key={day.value}
                    value={day.value}
                    label={day.label}
                  >
                    {day.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <Controller
          control={control}
          name="teacher"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger
                className={cn({
                  "border-mint-green": value,
                  "border-vivid-red": error,
                })}
              >
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {teachers.map((day) => (
                  <SelectItem key={day.id} value={day.name} label={day.name}>
                    {day.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <Controller
          control={control}
          name="room"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger
                className={cn({
                  "border-mint-green": value,
                  "border-vivid-red": error,
                })}
              >
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {rooms.map((day) => (
                  <SelectItem
                    key={day.id}
                    value={day.roomNumber}
                    label={day.roomNumber}
                  >
                    {day.roomNumber}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
}
