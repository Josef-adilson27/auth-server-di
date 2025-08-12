import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { LoginService } from "../../services/authService/login.js";
import { TYPES } from "../../types.js";

@injectable()
export class LoginController {
  constructor(@inject(TYPES.LoginService) private loginService: LoginService) {}

  async login(req: Request, res: Response): Promise<void> {
    res.send( await this.loginService.login());
  }
  
}