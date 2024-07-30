export class CreateAccountError extends Error {
  constructor(message = "Failed to create account") {
    super(message);
    this.name = "CreateAccountError";
  }
}
