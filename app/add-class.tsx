import { Button } from "@/components/ui/buttons";
import ColorPicker from "@/components/ui/color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import { colors } from "@/data/colors";
import { weekdays } from "@/data/weekdays";
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
import { ScrollView, View } from "react-native";

export default function AddClass() {
  const teachers = useTeachersStore((store) => store.teachers);
  const rooms = useRoomsStore((store) => store.rooms);
  const subjects = useSubjectsStore((store) => store.subjects);
  const addClass = useClassesStore((store) => store.addClass);

  const [showStartsAtTimePicker, setShowStartsAtTimePicker] =
    useState<boolean>(false);
  const [showEndsAtTimePicker, setShowEndsAtTimePicker] =
    useState<boolean>(false);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AddClassFields>({
    defaultValues: {
      description: "",
    },
    resolver: zodResolver(AddClassSchema),
  });

  const onSubmit: SubmitHandler<AddClassFields> = (data) => {
    addClass({
      id: Date.now().toString(),
      weekDay: data.weekDay.value,
      teacher: data.teacher.value,
      room: data.room.value,
      subject: data.subject.value,
      description: data.description,
      classStartsAt: data.classStartsAt,
      classEndsAt: data.classEndsAt,
      color: data.color,
    });
    router.back();
  };
  return (
    <ScrollView className="flex-1">
      <View className="flex gap-10 px-2 py-5">
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
                  {weekdays.map((day) => (
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
              <Select
                value={value}
                onValueChange={(option) => {
                  onChange(option);
                  setValue(
                    "color",
                    subjects.find((subject) => subject.name === option?.value)
                      ?.color || "",
                  );
                }}
              >
                <SelectTrigger
                  className={cn({
                    "border-mint-green": value,
                    "border-vivid-red": error,
                  })}
                >
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {subjects.map((subject) => (
                    <SelectItem
                      key={subject.id}
                      value={subject.name}
                      label={subject.name}
                    >
                      {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </View>
        <View>
          <Text className="mb-2">Description</Text>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Textarea
                  className={cn({
                    "border-mint-green": value,
                    "border-vivid-red": error,
                  })}
                  value={value}
                  onChangeText={onChange}
                />
                <View className="flex flex-row justify-between">
                  <Text className={cn({ "text-vivid-red": error?.message })}>
                    {value.length} / 500
                  </Text>
                  {error?.message && (
                    <Text className="text-vivid-red">{error.message}</Text>
                  )}
                </View>
              </>
            )}
          />
        </View>
        <View>
          <Text className="mb-2">Duration</Text>
          <View className="flex flex-row justify-center gap-2">
            <Controller
              control={control}
              name="classStartsAt"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Button
                    className="w-1/2"
                    onPress={() => setShowStartsAtTimePicker(true)}
                  >
                    <Text>
                      {value ? dayjs(value).format("HH:mm") : "Starts at"}
                    </Text>
                  </Button>
                  {showStartsAtTimePicker && (
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
                </>
              )}
            />

            <Controller
              control={control}
              name="classEndsAt"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Button
                    className="w-1/2"
                    onPress={() => setShowEndsAtTimePicker(true)}
                  >
                    <Text>
                      {value ? dayjs(value).format("HH:mm") : "Ends at"}
                    </Text>
                  </Button>
                  {showEndsAtTimePicker && (
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
                </>
              )}
            />
          </View>
          {errors.classEndsAt && (
            <Text className="text-vivid-red">{errors.classEndsAt.message}</Text>
          )}
        </View>
        <View>
          <Text className="mb-2">Color (optional)</Text>
          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, onBlur, value } }) => (
              <ColorPicker colors={colors} value={value} onChange={onChange} />
            )}
          />
        </View>
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Add</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
