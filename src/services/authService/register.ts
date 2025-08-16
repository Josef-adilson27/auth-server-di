import { inject, injectable } from "inversify";
import { UserDto } from "../../dtos/UserDto.js";
import {UserRepository} from "../../repositories/UserRepository.js";
import { TYPES } from "../../types.js";
import { User } from "../../models/User.js";

@injectable()
export class RegisterService{
 constructor(@inject(TYPES.UserRepository) private userRepository: UserRepository){}
   
 async register(user: UserDto) {
    return    await this.userRepository.create(user);
 }

}