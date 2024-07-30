import { Country } from "@/shared/types/country";
import { Persisted } from "@/shared/types/persisted";
import { object, string, type z } from "zod";

export const baseSchema = object({
  name: string()
    .min(1, "Name must be at least 1 character")
    .describe("The name of the account"),
  country: Country.schema.describe("The country the account is supported in"),
});

export type Base = z.infer<typeof baseSchema>;

export const schema = Persisted.from(baseSchema);

export const validateBase = (value: unknown): Base => baseSchema.parse(value);

export type Type = z.infer<typeof schema>;

export const validate = (value: unknown): Type => schema.parse(value);
