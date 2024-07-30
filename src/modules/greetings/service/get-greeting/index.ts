import { factory } from "./getGreeting";
import { Repository } from "../../repository";

export const getGreeting = factory(Repository);
