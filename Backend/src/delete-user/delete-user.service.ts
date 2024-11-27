import { Injectable } from '@nestjs/common';
import { CreateDeleteUserDto } from './dto/create-delete-user.dto';
import { UpdateDeleteUserDto } from './dto/update-delete-user.dto';

@Injectable()
export class DeleteUserService {
  create(createDeleteUserDto: CreateDeleteUserDto) {
    return 'This action adds a new deleteUser';
  }

  findAll() {
    return `This action returns all deleteUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deleteUser`;
  }

  update(id: number, updateDeleteUserDto: UpdateDeleteUserDto) {
    return `This action updates a #${id} deleteUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} deleteUser`;
  }
}
