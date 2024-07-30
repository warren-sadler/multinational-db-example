import { get } from "env-var";
import { generateWithConfig } from "../../utils/generate-with-config";

const DATABASE_URL = "DATABASE_URL" as const;

interface ApplicationConfiguration {
  DATABASE_URL: string;
}

export function getApplicationConfig(
  overrides: Partial<ApplicationConfiguration> = {}
): ApplicationConfiguration {
  return {
    DATABASE_URL: get(DATABASE_URL).required().asString(),
    ...overrides,
  };
}

export const withApplicationConfiguration =
  generateWithConfig(getApplicationConfig);
