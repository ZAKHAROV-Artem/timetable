CREATE TABLE `teachers` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullname` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text
);
