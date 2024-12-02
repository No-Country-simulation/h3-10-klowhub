import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  @Length(0, 400)
  description: string;

  @IsNumber()
  sales_type_id: number;

  @IsOptional()
  @IsString()
  url_website: string;

  @IsNumber()
  collection_method_id: number;
}
