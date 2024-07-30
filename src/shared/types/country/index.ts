import * as schema from "./country";

export const Country = {
  ...schema,
} as const;

export namespace Country {
  export type Type = schema.Type;
}
