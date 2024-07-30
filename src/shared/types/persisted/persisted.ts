import { date, object, string, type z } from "zod";

export const baseSchema = object({
  id: string().uuid(),
  createdAt: date(),
  updatedAt: date().optional(),
});

export type Type = z.infer<typeof baseSchema>;

export const validate = (obj: unknown): Type => baseSchema.parse(obj);

export const omit = <PS extends typeof baseSchema>(schema: PS) => {
  return schema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });
};

export const from = <RS extends z.ZodRawShape, ZO extends z.ZodObject<RS>>(
  schema: ZO
) => {
  return baseSchema.merge(schema);
};

export type Persisted<T> = Type & T;

export type OmitPersisted<T> = Omit<T, keyof Type>;
