import { 
  IsEmail, 
  IsString, 
  MinLength, 
  MaxLength, 
} from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateUserDto } from './CreateUserDto.js';

export class LoginUserDto implements Omit<CreateUserDto,'name' | 'createdAt' | ''>  {
  @IsEmail()
  @Transform(({value})=>value.toLowerCase().trim())
  email: string;
  @IsString()
  @MaxLength(20)
  @MinLength(3)
  password: string
} 