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
import { useClassesStore } from "@/store/use-classes-store";
import { useRoomsStore } from "@/store/user-rooms-store";
import { useSubjectsStore } from "@/store/user-subjects-store";
import { useTeachersStore } from "@/store/user-teachers-store";
import { AddClassFields, AddClassSchema } from "@/types/validation/add-class";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function AddClass() {
  const teachers = useTeachersStore((store) => store.teachers);
  const rooms = useRoomsStore((store) => store.rooms);
  const subjects = useSubjectsStore((store) => store.subjects);
  const addClass = useClassesStore((store) => store.addClass);

  const [showStartsAtTimePicker, setShowStartsAtTimePicker] =
    useState<boolean>(false);
  const [showEndsAtTimePicker, setShowEndsAtTimePicker] =
    useState<boolean>(false);

  const { control, getValues, handleSubmit } = useForm<AddClassFields>({
    resolver: zodResolver(AddClassSchema),
  });

  const onSubmit: SubmitHandler<AddClassFields> = (data) => {
    addClass({
      id: Date.now().toString(),
      weekDay: data.weekDay.value,
      teacher: data.teacher.value,
      room: data.room.value,
      subject: data.subject.value,
      classStartsAt: data.classStartsAt,
      classEndsAt: data.classEndsAt,
    });
    router.back();
  };

  return (
    <View className="px-2 py-5">
      <View className="flex gap-10">
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
                    <SelectItem key={day} value={day} label={day}>
                      {day}
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
          <Controller
            control={control}
            name="subject"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger
                  className={cn({
                    "border-mint-green": value,
                    "border-vivid-red": error,
                  })}
                >
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {subjects.map((day) => (
                    <SelectItem key={day.id} value={day.name} label={day.name}>
                      {day.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </View>
        <View className="flex flex-row justify-center gap-2">
          <Button
            className="w-1/2"
            onPress={() => setShowStartsAtTimePicker(true)}
          >
            <Text>
              {getValues("classStartsAt")
                ? dayjs(getValues("classStartsAt")).format("HH:mm")
                : "Starts at"}
            </Text>
          </Button>
          <Button
            className="w-1/2"
            onPress={() => setShowEndsAtTimePicker(true)}
          >
            <Text>
              {getValues("classEndsAt")
                ? dayjs(getValues("classEndsAt")).format("HH:mm")
                : "Ends at"}
            </Text>
          </Button>
          {showStartsAtTimePicker && (
            <Controller
              control={control}
              name="classStartsAt"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <DateTimePicker
                  mode="time"
                  value={value || new Date()}
                  is24Hour={true}
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate);
                    setShowStartsAtTimePicker(false);
                  }}
                />
              )}
            />
          )}
          {showEndsAtTimePicker && (
            <Controller
              control={control}
              name="classEndsAt"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <DateTimePicker
                  mode="time"
                  value={value || new Date()}
                  is24Hour={true}
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate);
                    setShowEndsAtTimePicker(false);
                  }}
                />
              )}
            />
          )}
        </View>
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Add</Text>
        </Button>
      </View>
    </View>
  );
}
