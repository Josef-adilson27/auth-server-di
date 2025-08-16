import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { RegisterService } from "../../services/authService/register.js";
import { TYPES } from "../../types.js";
import { UserDto } from "../../dtos/UserDto.js";


@injectable()
export class RegisterController {
  constructor(@inject(TYPES.RegisterService) private registerService: RegisterService) {}

  async register(req: Request, res: Response) {
    const user: UserDto = req.body
    res.status(200).json(await this.registerService.register(user));
  }
  
}
