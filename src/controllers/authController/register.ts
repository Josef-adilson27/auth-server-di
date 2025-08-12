import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { RegisterService } from "../../services/authService/register.js";
import { TYPES } from "../../types.js";

@injectable()
export class RegisterController {
  constructor(@inject(TYPES.RegisterService) private registerService: RegisterService) {}

  async register(req: Request, res: Response) {
    console.log(await this.registerService.register());
    res.status(200).json({ message: "register successful" });
  }
  
}
