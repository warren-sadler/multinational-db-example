import { getGreeting } from "./get-greeting";
import { createGreeting } from "./create-greeting";

export const Service = {
  createGreeting,
  getGreeting,
} as const;

export type Service = typeof Service;
