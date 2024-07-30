import * as Greetings from "./greetings";
export const Repository = {
  Greetings,
} as const;

export type Repository = typeof Repository;
