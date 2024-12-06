import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  name: string;

  @IsAlpha()
  lastname: string;

  @IsString()
  birthday: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  profile_image: string;

  @MaxLength(8)
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
