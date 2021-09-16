import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}