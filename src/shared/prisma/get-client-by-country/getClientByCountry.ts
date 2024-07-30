import { PrismaClient } from "@prisma/client";
import type { Country } from "@/shared/types/country";
import { getDatabaseConfig } from "@/shared/configuration/database";

let prismaUSClient: PrismaClient | null = null;
let prismaUKClient: PrismaClient | null = null;
let prismaAUClient: PrismaClient | null = null;

export function getClientByCountry(country: Country.Type): PrismaClient {
  const { UK_CONNECTION_URL, US_CONNECTION_URL, AU_CONNECTION_URL } =
    getDatabaseConfig();
  switch (country) {
    case "US":
      if (!prismaUSClient) {
        prismaUSClient = new PrismaClient({
          datasources: {
            db: {
              url: US_CONNECTION_URL,
            },
          },
        });
      }
      return prismaUSClient;
    case "UK":
      if (!prismaUKClient) {
        prismaUKClient = new PrismaClient({
          datasources: {
            db: {
              url: UK_CONNECTION_URL,
            },
          },
        });
      }
      return prismaUKClient;
    case "AU":
      if (!prismaAUClient) {
        prismaAUClient = new PrismaClient({
          datasources: {
            db: {
              url: AU_CONNECTION_URL,
            },
          },
        });
      }
      return prismaAUClient;
  }
}
