import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const teachers = sqliteTable("teachers", {
  id: integer("id").primaryKey(),
  fullname: text("fullname"),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updated_at"),
});

export type Teacher = typeof teachers.$inferSelect;
