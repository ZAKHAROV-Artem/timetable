import zod from "zod";

export const AddHomeworkSchema = zod.object({
  title: zod.string().max(100, "Too long"),
  description: zod.string().max(500, "Too long").default(""),

  dueDate: zod.date(),
  isCompleted: zod.boolean().default(false),
});

export type AddHomeworkFields = zod.infer<typeof AddHomeworkSchema>;
