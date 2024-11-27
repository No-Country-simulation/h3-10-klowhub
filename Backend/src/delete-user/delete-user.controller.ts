import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { CreateDeleteUserDto } from './dto/create-delete-user.dto';
import { UpdateDeleteUserDto } from './dto/update-delete-user.dto';

@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Post()
  create(@Body() createDeleteUserDto: CreateDeleteUserDto) {
    return this.deleteUserService.create(createDeleteUserDto);
  }

  @Get()
  findAll() {
    return this.deleteUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deleteUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeleteUserDto: UpdateDeleteUserDto) {
    return this.deleteUserService.update(+id, updateDeleteUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUserService.remove(+id);
  }
}
