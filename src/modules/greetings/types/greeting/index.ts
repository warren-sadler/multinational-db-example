import * as schema from "./greeting";

export const Greeting = {
  ...schema,
} as const;

export namespace Greeting {
  export type Base = schema.Base;
  export type Type = schema.Type;
}
