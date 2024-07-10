import zod from "zod";

export const AddTeacherSchema = zod.object({
  name: zod.string().min(1, "Required").max(30, "Too long"),
});

export type AddTeacherSchemaFields = zod.infer<typeof AddTeacherSchema>;
