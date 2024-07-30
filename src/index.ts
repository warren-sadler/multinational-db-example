import { Accounts } from "./modules/accounts";
import { Greetings } from "./modules/greetings";

const accounts = await Accounts.Service.list();

for (const account of accounts) {
  const greeting = await Greetings.Service.getGreeting(account);
  console.log(`Greeting for Account: ${account.name}`, greeting.message);
}
