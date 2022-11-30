import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    // return {
    //   name: 'Chanaka S. Wickramanayaka',
    //   email: 'chanakauomfit@gmail.com',
    //   note: 'from user-service',
    // };
    return this.userRepository.find();
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

  getUser(userId: number): Promise<User> {
    // return { userId };
    return this.userRepository.findOneBy({ id: userId });
  }
}
