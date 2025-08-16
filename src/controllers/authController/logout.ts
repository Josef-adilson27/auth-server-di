import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../types.js";
import { LogoutService } from "../../services/authService/logout.js";

@injectable()
export class LogoutController {

  constructor(@inject(TYPES.logoutService) private logoutService: LogoutService) {}

  async logout(req: Request, res: Response): Promise<void> {
    res.send(await this.logoutService.logout())
  }

}