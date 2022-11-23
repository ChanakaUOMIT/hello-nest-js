import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Chanaka S. Wickramanayaka',
      email: 'chanakauomfit@gmail.com',
      note: 'from user-service',
    };
  }

  create(cerateUserDto: CreateUserDto) {
    return cerateUserDto;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }

  delete(param: { userId: number }) {
    return param;
  }

  getUser(userId: number) {
    return { userId };
  }
}
