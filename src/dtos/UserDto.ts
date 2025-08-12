import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class UserDto{
 @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail()
  email: string;
} 