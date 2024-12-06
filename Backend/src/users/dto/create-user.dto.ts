import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
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
  @Matches(/@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/)
  email: string;

  @IsString()
  @IsOptional()
  profile_image: string;

  @MaxLength(8)
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
