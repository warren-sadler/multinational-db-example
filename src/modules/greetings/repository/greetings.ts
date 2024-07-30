import { prisma } from "@/shared/prisma";
import { type CRUD } from "@/shared/types/crud";
import { Greeting } from "../types/greeting";
import type { PrismaClient } from "@prisma/client";

type GreetingCRUD = CRUD.CRUD<Greeting.Type>;

export const create: GreetingCRUD["Create"] = async (
  greeting,
  prismaClient
) => {
  const createdGreeting = await (prisma || prismaClient).greeting.create({
    data: greeting,
  });
  return Greeting.validate(createdGreeting);
};

export const read = async (prismaClient?: PrismaClient) => {
  const greeting = await (prisma || prismaClient).greeting.findFirst();
  return Greeting.validate(greeting);
};
