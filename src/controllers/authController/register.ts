import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { AuthService } from "../../services/authService/AuthService.js";
import { TYPES } from "../../types.js";

@injectable()
export class RegisterController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {}

  async register(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "register successful" });
  }
}
