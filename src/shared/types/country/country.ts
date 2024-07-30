import { z } from "zod";

const US = "US" as const;
const UK = "UK" as const;
const AU = "AU" as const;

export const COUNTRIES = [US, UK, AU] as const;

export const schema = z.enum(COUNTRIES);

export type Type = z.infer<typeof schema>;

export const validate = (value: unknown): Type => schema.parse(value);
