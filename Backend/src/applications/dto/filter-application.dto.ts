import { IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @IsOptional()
  @IsString()
  language_id?: string;

  @IsOptional()
  @IsString()
  type_course_id?: string;

  @IsOptional()
  @IsString()
  course_level_id?: string;

  @IsOptional()
  @IsString()
  platform_id?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  sector_id?: string;

  @IsOptional()
  @IsString()
  contentPillar_id?: string;

  @IsOptional()
  @IsString()
  functionality_id?: string;

  @IsOptional()
  @IsString()
  tool_id?: string;
}
