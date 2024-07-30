import { Service } from "./service";

export const Greetings = {
  Service,
} as const;

export namespace Greetings {
  export type GreetingsService = Service;
}
