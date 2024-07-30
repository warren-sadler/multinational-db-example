import { type z } from "zod";
import { Account } from "@/modules/accounts/types/account";

export const schema = Account.schema;

export type Type = z.infer<typeof schema>;
