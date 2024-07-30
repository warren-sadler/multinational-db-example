import * as Accounts from "./accounts";

export const Repository = {
  Accounts,
} as const;

export type Repository = typeof Repository;
