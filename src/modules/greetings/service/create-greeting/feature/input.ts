import { z } from "zod";
import { Greeting } from "@/modules/greetings/types/greeting";

export const schema = Greeting.baseSchema;

export type Type = z.infer<typeof schema>;
