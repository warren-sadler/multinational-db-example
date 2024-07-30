import { Account } from "@/modules/accounts/types/account";
import { getClientByCountry } from "@/shared/prisma/get-client-by-country";

import { Repository } from "../../repository";

export const factory = (repository: Repository) => {
  return async function getGreeting(account: Account.Type) {
    const prismaClient = getClientByCountry(account.country);
    return repository.Greetings.read(prismaClient);
  };
};
