import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class UserDto{
 @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  password: string
} 