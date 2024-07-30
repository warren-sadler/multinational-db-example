import { z } from "zod";
import { Greeting } from "@/modules/greetings/types/greeting";

export const schema = Greeting.schema;

export type Type = z.infer<typeof schema>;
