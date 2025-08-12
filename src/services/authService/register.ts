import { inject, injectable } from "inversify";

@injectable()
export class RegisterService{
async register() {
    return 'login from RegisterService'
  }
}