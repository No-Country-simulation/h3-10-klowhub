import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 8)
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponseWithToken extends LoginResponse {
  token: string;
}
