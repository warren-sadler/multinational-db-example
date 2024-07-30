import { list } from "../repository/accounts";
import { createAccount } from "./create-account";

export const Service = {
  list,
  createAccount,
} as const;

export type Service = typeof Service;
