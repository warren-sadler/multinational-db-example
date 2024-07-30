import { Persisted } from "../persisted";
import type { PrismaClient } from "@prisma/client";

export type CRUD<
  T,
  B = Persisted.OmitPersisted<T>,
  P = Persisted.Persisted<T>
> = {
  Create: (
    value: B,
    prismaClient?: PrismaClient
  ) => Promise<Persisted.Persisted<P>>;
  Read: (id: string, prismaClient?: PrismaClient) => Promise<P>;
  Update: (
    id: string,
    value: Partial<B>,
    prismaClient?: PrismaClient
  ) => Promise<P>;
  Delete: (id: string, prismaClient?: PrismaClient) => Promise<void>;
};
