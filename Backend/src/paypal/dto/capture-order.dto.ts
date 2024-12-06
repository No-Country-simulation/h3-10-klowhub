import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CaptureOrderDto {
  @ApiProperty({
    example: 'PAYID-LW3JLJ5',
    description: 'The ID of the order to capture',
  })
  @IsString()
  @IsNotEmpty()
  orderId: string;
}
