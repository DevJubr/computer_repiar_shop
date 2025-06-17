import { coustomers } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertCustomerSchema = createInsertSchema(coustomers, {
  first_name: (schema) => schema.min(1, "First name required"),
  last_name: (schema) => schema.min(1, "Last name required"),
  address1: (schema) => schema.min(1, "Address 1 required"),
  address2: (schema) => schema.optional(), // if optional
  state: (schema) => schema.length(2, "State required"),
  email: (schema) => schema.email("Email required"),
  zip: (schema) =>
    schema.regex(
      /^\d{5}(-\d{4})?$/,
      "Invalid zip code format (12345 or 12345-6789)"
    ),
  phone: (schema) =>
    schema.regex(/^\d{3}-\d{3}-\d{4}$/, "Phone must be in format 123-456-7890"),
});

export const selectCoustomerSchema = createSelectSchema(coustomers);

export type InsertCustomerSchemaType = typeof insertCustomerSchema.type;
export type SelectCustomerSchemaType = typeof selectCoustomerSchema.type;
