import { prisma } from "@/shared/prisma/prisma";
import { type CRUD } from "@/shared/types/crud";
import { Country } from "@/shared/types/country";
import { connectOrCreateConcept } from "@/shared/utils/connect-or-create-concept";

import { Account } from "../types/account";

type AccountCRUD = CRUD.CRUD<Account.Type>;

export const create: AccountCRUD["Create"] = async (account) => {
  const createdAccount = await prisma.account.create({
    data: {
      name: account.name,
      Country: {
        connectOrCreate: connectOrCreateConcept(account.country),
      },
    },
    include: {
      Country: true,
    },
  });
  return Account.validate({
    id: createdAccount.id,
    name: createdAccount.name,
    country: Country.validate(createdAccount.Country.name),
    createdAt: createdAccount.createdAt,
    updatedAt: createdAccount.updatedAt,
  } satisfies Account.Type);
};

export async function list() {
  const accounts = await prisma.account.findMany({
    include: {
      Country: true,
    },
  });
  return accounts.map((account) =>
    Account.validate({
      id: account.id,
      name: account.name,
      country: Country.validate(account.Country.name),
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    } satisfies Account.Type)
  );
}
