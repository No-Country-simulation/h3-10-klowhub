import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Delete user')
@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Get()
  findAll() {
    try {
      return this.deleteUserService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.deleteUserService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
