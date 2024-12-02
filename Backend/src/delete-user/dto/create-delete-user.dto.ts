import { IsString } from 'class-validator';

export class CreateDeleteUserDto {
  @IsString()
  user_id: string;
}
