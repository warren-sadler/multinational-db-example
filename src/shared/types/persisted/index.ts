import * as schema from "./persisted";

export const Persisted = {
  ...schema,
} as const;

export namespace Persisted {
  export type Type = schema.Type;
  export type Persisted<T> = schema.Persisted<T>;
  export type OmitPersisted<T> = schema.OmitPersisted<T>;
}
