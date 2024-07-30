import "dotenv/config";
import { Accounts } from "@/modules/accounts";
import type { Account } from "@/modules/accounts/types/account";
import { Greetings } from "@/modules/greetings";
import type { Greeting } from "@/modules/greetings/types/greeting";
import { PrismaClient } from "@prisma/client";

async function main() {
  // #region Setup Test Data and Prisma Clients
  const { prismaAU, prismaUK, prismaUS } = {
    prismaUK: new PrismaClient({
      datasources: {
        db: {
          url: process.env.UK_CONNECTION_URL,
        },
      },
    }),
    prismaUS: new PrismaClient({
      datasources: {
        db: {
          url: process.env.US_CONNECTION_URL,
        },
      },
    }),
    prismaAU: new PrismaClient({
      datasources: {
        db: {
          url: process.env.AU_CONNECTION_URL,
        },
      },
    }),
  };

  const TEST_ACCOUNTS: Account.Base[] = [
    {
      name: "American Account",
      country: "US",
    },
    {
      name: "British Account",
      country: "UK",
    },
    {
      name: "Australian Account",
      country: "AU",
    },
  ];
  const TEST_GREETINGS: [PrismaClient, Greeting.Base][] = [
    [prismaUS, { message: "Hello, World!" }],
    [prismaUK, { message: "Oi Mate!" }],
    [prismaAU, { message: "G'day!" }],
  ];
  // #endregion
  for (const account of TEST_ACCOUNTS) {
    await Accounts.Service.createAccount(account);
  }
  for (const [prisma, greeting] of TEST_GREETINGS) {
    await Greetings.Service.createGreeting(greeting, prisma);
  }
}

main().catch(console.error);
