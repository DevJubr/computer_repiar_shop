import {
  varchar,
  text,
  timestamp,
  integer,
  pgTable,
  serial,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
// import { title } from "process";

export const coustomers = pgTable("coustomers", {
  id: serial("id").primaryKey(),
  first_name: varchar("first_name").notNull(),
  last_name: varchar("last_name").notNull(),
  email: varchar("email").notNull().unique(),
  phone: varchar("phone").notNull(),
  address1: varchar("address1").notNull(),
  address2: varchar("address2").notNull(),
  city: varchar("city").notNull(),
  state: varchar("state").notNull(),
  zip: varchar("zip").notNull(),
  notes: text("notes").notNull(),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tickets = pgTable("tickets", {
  id: serial("id").primaryKey(),
  coustomerId: integer("coustomer_id")
    .notNull()
    .references(() => coustomers.id),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  tech: varchar("tech").notNull().default("Unassigned"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const coustomersRilations = relations(coustomers, ({ many }) => ({
  tickets: many(tickets),
}));

export const ticketsRelations = relations(tickets, ({ one }) => ({
  coustomers: one(coustomers, {
    fields: [tickets.coustomerId],
    references: [coustomers.id],
  }),
}));
