import zod from "zod";

export const AddClassSchema = zod.object({
  weekDay: zod.object({
    label: zod.string().min(1, "Required"),
    value: zod.string().min(1, "Required"),
  }),
  teacher: zod.object({
    label: zod.string().min(1, "Required"),
    value: zod.string().min(1, "Required"),
  }),
  room: zod.object({
    label: zod.string().min(1, "Required"),
    value: zod.string().min(1, "Required"),
  }),
});

export type AddClassFields = zod.infer<typeof AddClassSchema>;
