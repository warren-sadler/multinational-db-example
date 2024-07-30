import { z } from "zod";
import { CreateAccount } from "./feature";
import type { Repository } from "../../repository";

export const factory = (repository: Repository) => {
  return async function createAccount(
    input: CreateAccount.Input
  ): Promise<CreateAccount.Output> {
    try {
      return await repository.Accounts.create(input);
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        throw new CreateAccount.CreateAccountError(error.message);
      }
      throw new CreateAccount.CreateAccountError();
    }
  };
};
