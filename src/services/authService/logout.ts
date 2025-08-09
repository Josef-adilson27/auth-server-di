import { inject, injectable } from "inversify";

@injectable()
export class  LogoutService{

async logout() {
    return 'logout from AuthService'
  }
}