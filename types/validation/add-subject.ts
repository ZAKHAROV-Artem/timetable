import zod from "zod";

export const AddSubjectShema = zod.object({
  name: zod.string().min(1, "Required").max(30, "Too long"),
});

export type AddSubjectFields = zod.infer<typeof AddSubjectShema>;
