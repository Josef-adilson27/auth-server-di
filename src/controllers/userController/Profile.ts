import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { AuthService } from "../../services/authService/AuthService.js";
import { TYPES } from "../../types.js";
import { ProfileService } from "../../services/userService/ProfileService.js";

export class ProfileController {
  constructor(
    @inject(TYPES.ProfileService) private profileService: ProfileService
  ) {}

  async profile(req: Request, res: Response): Promise<void> {
    const profile = await this.profileService.profile()
    res.status(200).json(profile);
  }
}
