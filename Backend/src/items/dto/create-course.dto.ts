import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsBoolean()
  is_course: boolean = true;

  @IsString()
  @IsNotEmpty()
  seller_id: string;

  @IsInt()
  type_item_id: number;

  @IsBoolean()
  @IsOptional()
  premium?: boolean;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  item_level_id: number;

  @IsInt()
  platform_id: number;

  @IsInt()
  language_id: number;

  @IsInt()
  sector_id: number;

  @IsInt()
  content_pillar_id: number;

  @IsInt()
  functionality_id: number;

  @IsInt()
  tool_id: number;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price must be a valid number with up to two decimal places' },
  )
  price: number;

  @IsDecimal()
  @IsOptional()
  punctuation?: number;

  @IsString()
  @IsOptional()
  video_url: string;

  @IsString()
  @IsOptional()
  image_url: string;
}
