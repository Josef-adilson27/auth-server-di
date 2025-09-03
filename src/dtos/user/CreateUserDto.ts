import { 
  IsEmail, 
  IsString, 
  MinLength, 
  MaxLength, 
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {

  @IsString()
  @MaxLength(20)
  @MinLength(3)
  @Transform(({value})=>value.toLowerCase().trim())
  name: string;
  @IsEmail()
  @Transform(({value})=>value.trim())
  email: string;
  @IsString()
  @MaxLength(20)
  @MinLength(3)
  password: string
} 