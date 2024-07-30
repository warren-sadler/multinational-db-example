import type { Repository } from "../../repository";

export function factory(repository: Repository) {
  return async function list() {
    return repository.Accounts.list();
  };
}
