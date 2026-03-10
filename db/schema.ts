import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";

export const blogTable = pgTable('blogs', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 80}).notNull(),
    body: text().notNull(),
    orgId: text().notNull(),
    createdBy: text(),
})

export type ContentBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;