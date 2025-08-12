import { inject, injectable } from "inversify";

@injectable()
export class LoginService{
async login() {
    return 'login from LoginService'
  }
}