import zod from "zod";

export const AddSubjectShema = zod.object({
  name: zod.string().min(1, "Required").max(30, "Too long"),
  color: zod.string().regex(/^#([0-9a-f]{3}){1,2}$/i, "Invalid color"),
});

export type AddSubjectFields = zod.infer<typeof AddSubjectShema>;
