import { IsNumber, IsString } from "class-validator"

export class CreateTransactionDto {
    
    @IsString()
    wallet_id: string

    @IsNumber()
    type_transaction: number

    @IsNumber(
        { maxDecimalPlaces: 2 },
        { message: 'amount must be a valid number with up to two decimal places' },
      )
    amount: number
}