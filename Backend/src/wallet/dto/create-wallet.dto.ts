import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  seller_id: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  balance?: number;
}
