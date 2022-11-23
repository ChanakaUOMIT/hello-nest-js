import {
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  // private userService;

  // constructor(userService:UserService){
  //   this.userService = userService
  // }

  constructor(private userService: UserService) {}

  // private userService;

  // constructor() {
  //   this.userService = new UserService();
  // }

  @Get('')
  getUsers() {
    // return {
    //   name: 'Chanaka',
    //   email: 'chanakauomfit@gmail.com',
    // };
    return this.userService.get();
  }

  @Post('')
  store(@Body() createUserDto: CreateUserDto) {
    Logger.debug('Hi');
    console.log(createUserDto);
    // return req.body;
    return this.userService.create(createUserDto);
  }

  @Patch(':userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    console.log(updateUserDto);
    // return req.body;
    return this.userService.update(updateUserDto, userId);
  }

  @Put(':userId')
  updatePut(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    // return params;
    return this.userService.getUser(userId);
  }

  @Delete(':userId')
  deleteUser(@Param() param: { userId: number }) {
    // return param;
    return this.userService.delete(param);
  }
}
