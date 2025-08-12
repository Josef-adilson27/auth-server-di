import { inject, injectable } from "inversify";

@injectable()
export class AuthService{

async login() {
    return 'login from AuthService'
  }
}