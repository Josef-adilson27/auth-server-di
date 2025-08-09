import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { AuthService } from "../../services/authService/AuthService.js";
import { TYPES } from "../../types.js";

@injectable()
export class LoginController {
  
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {}
  
  async login(req: Request, res: Response): Promise<void> {
    res.send( await this.authService.login());
  }
  
}