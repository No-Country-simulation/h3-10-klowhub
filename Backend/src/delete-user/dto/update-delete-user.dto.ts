import { PartialType } from '@nestjs/mapped-types';
import { CreateDeleteUserDto } from './create-delete-user.dto';

export class UpdateDeleteUserDto extends PartialType(CreateDeleteUserDto) {}
