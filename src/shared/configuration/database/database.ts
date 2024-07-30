import { generateWithConfig } from "../../utils/generate-with-config";

const US_CONNECTION_URL = "US_CONNECTION_URL" as const;
const UK_CONNECTION_URL = "UK_CONNECTION_URL" as const;
const AU_CONNECTION_URL = "AU_CONNECTION_URL" as const;

interface DatabaseConfiguration {
  US_CONNECTION_URL: string;
  UK_CONNECTION_URL: string;
  AU_CONNECTION_URL: string;
}

export function getDatabaseConfig(
  overrides: Partial<DatabaseConfiguration> = {}
): DatabaseConfiguration {
  return {
    US_CONNECTION_URL: process.env[US_CONNECTION_URL] as string,
    UK_CONNECTION_URL: process.env[UK_CONNECTION_URL] as string,
    AU_CONNECTION_URL: process.env[AU_CONNECTION_URL] as string,
    ...overrides,
  };
}

export const withDatabaseConfiguration = generateWithConfig(getDatabaseConfig);
