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
  subject: zod.object({
    label: zod.string().min(1, "Required"),
    value: zod.string().min(1, "Required"),
  }),

  classStartsAt: zod.date(),
  classEndsAt: zod.date(),

  color: zod.string().regex(/^#([0-9a-f]{3}){1,2}$/i, "Invalid color"),
});

export type AddClassFields = zod.infer<typeof AddClassSchema>;
