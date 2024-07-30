import * as schema from "./account";

export const Account = {
  ...schema,
} as const;

export namespace Account {
  export type Type = schema.Type;
  export type Base = schema.Base;
}
