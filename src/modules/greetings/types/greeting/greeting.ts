import { object, string, type z } from "zod";

import { Persisted } from "@/shared/types/persisted";

export const baseSchema = object({
  message: string().min(1).max(255).describe("The message to be displayed"),
});

export type Base = z.infer<typeof baseSchema>;

export const schema = Persisted.from(baseSchema);

export type Type = z.infer<typeof schema>;

export const validate = schema.parse;
