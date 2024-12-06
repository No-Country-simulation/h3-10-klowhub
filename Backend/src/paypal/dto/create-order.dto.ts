import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PaypalUnitAmountDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency_code: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;
}

export class PaypalItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  quantity: string;

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => PaypalUnitAmountDto)
  unit_amount: PaypalUnitAmountDto;

  @ApiProperty({ enum: ['course', 'plan'] })
  @IsString()
  @IsNotEmpty()
  type: 'course' | 'plan';
}

class PaypalCurrencyValueDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency_code: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;
}

export class PaypalAmountBreakdownDto {
  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => PaypalCurrencyValueDto)
  item_total: PaypalCurrencyValueDto;
}

export class PaypalAmountDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency_code: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => PaypalAmountBreakdownDto)
  breakdown: PaypalAmountBreakdownDto;
}

export class CreateOrderDto {
  @ApiProperty({ type: () => [PaypalPurchaseUnitDto] })
  @ValidateNested({ each: true })
  @Type(() => PaypalPurchaseUnitDto)
  @IsArray()
  purchase_units: PaypalPurchaseUnitDto[];
}

class PayeDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  sellerEmail: string;
}

export class PaypalPurchaseUnitDto {
  @ApiProperty({ type: () => PaypalAmountDto })
  @ValidateNested()
  @Type(() => PaypalAmountDto)
  @IsObject()
  amount: PaypalAmountDto;

  @ApiProperty({ type: () => [PaypalItemDto] })
  @ValidateNested({ each: true })
  @Type(() => PaypalItemDto)
  @IsArray()
  items: PaypalItemDto[];

  @ApiProperty({ example: { sellerEmail: 'seller@example.com' } })
  @IsObject()
  @ValidateNested()
  @Type(() => PayeDto)
  paye: PayeDto;
}
