import { Button } from "@/components/ui/buttons";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import { useClassesStore } from "@/store/use-classes-store";
import { useHomeworkStore } from "@/store/use-homework-store";
import {
  AddHomeworkFields,
  AddHomeworkSchema,
} from "@/types/validation/add-homework";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

export default function AddHomework() {
  const { id } = useLocalSearchParams();
  const classItem = useClassesStore((store) =>
    store.classes.find((item) => item.id === id),
  );
  const addHomework = useHomeworkStore((store) => store.addHomework);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddHomeworkFields>({
    resolver: zodResolver(AddHomeworkSchema),
  });
  console.log(errors);
  const [showDueDatePicker, setShowDueDatePicker] = useState<boolean>(false);

  const onSubmit: SubmitHandler<AddHomeworkFields> = (data) => {
    addHomework({
      id: new Date().toISOString(),
      ...data,
      subject: classItem!.subject,
      teacher: classItem!.teacher,
    });
    router.back();
  };

  if (!classItem) return null;

  return (
    <View className="flex flex-1 p-6">
      <Text className="mb-4 text-2xl font-bold text-royal-indigo">
        Add Homework for {classItem.subject}
      </Text>
      <View className="flex flex-col gap-4">
        <View>
          <Text className="text-lg font-medium text-royal-indigo">Title</Text>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Homework title"
              />
            )}
          />
          {errors.title && (
            <Text className="text-vivid-red">{errors.title.message}</Text>
          )}
        </View>
        <View>
          <Text className="text-lg font-medium text-royal-indigo">
            Description
          </Text>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Textarea
                value={value}
                onChangeText={onChange}
                placeholder="Homework description"
                multiline
              />
            )}
          />
          {errors.description && (
            <Text className="text-vivid-red">{errors.description.message}</Text>
          )}
        </View>
        <View>
          <Text className="text-lg font-medium text-royal-indigo">
            Due Date
          </Text>
          <Controller
            control={control}
            name="dueDate"
            render={({ field: { onChange, value } }) => (
              <>
                <Button onPress={() => setShowDueDatePicker(true)}>
                  <Text>
                    {value ? dayjs(value).format("YYYY-MM-DD") : "Select Date"}
                  </Text>
                </Button>
                {showDueDatePicker && (
                  <DateTimePicker
                    mode="date"
                    value={value || new Date()}
                    onChange={(event, selectedDate) => {
                      onChange(selectedDate);
                      setShowDueDatePicker(false);
                    }}
                  />
                )}
              </>
            )}
          />
          {errors.dueDate && (
            <Text className="text-vivid-red">{errors.dueDate.message}</Text>
          )}
        </View>
        <View className="flex flex-row items-center gap-2">
          <Text className="text-lg font-medium text-royal-indigo">
            Completed
          </Text>
          <Controller
            control={control}
            name="isCompleted"
            render={({ field: { onChange, value } }) => (
              <Checkbox checked={value} onCheckedChange={onChange} />
            )}
          />
        </View>
        <Button onPress={handleSubmit(onSubmit)} className="mt-6">
          <Text>Add Homework</Text>
        </Button>
        <Button onPress={router.back} className="mt-2">
          <Text>Cancel</Text>
        </Button>
      </View>
    </View>
  );
}
