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
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  // private userService;

  // constructor(userService:UserService){
  //   this.userService = userService
  // }

  // constructor(private userService: UserService) {}

  private userService;

  constructor() {
    this.userService = new UserService();
  }

  @Get('')
  getUsers() {
    // return {
    //   name: 'Chanaka',
    //   email: 'chanakauomfit@gmail.com',
    // };
    return this.userService.get();
  }

  @Post('')
  store(@Req() req: Request) {
    Logger.debug('Hi');
    console.log(req.body);
    return req.body;
  }

  @Patch('')
  update(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Put('')
  updatePut(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Get(':userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete(':userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
