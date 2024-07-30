import { CreateGreeting } from "./feature";

import { type Repository } from "../../repository";
import type { PrismaClient } from "@prisma/client";

export const factory = (repository: Repository) => {
  return async function createGreeting(
    input: CreateGreeting.Input,
    prismaClient?: PrismaClient
  ): Promise<CreateGreeting.Output> {
    const greeting = await repository.Greetings.create(input, prismaClient);
    return greeting;
  };
};
