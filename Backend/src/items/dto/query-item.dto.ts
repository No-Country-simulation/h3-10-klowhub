import { IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  tags: string;
}
