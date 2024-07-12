import zod from "zod";

export const AddRoomSchema = zod.object({
  roomNumber: zod.string().min(1, "Required").max(30, "Too long"),
});

export type AddRoomFields = zod.infer<typeof AddRoomSchema>;
