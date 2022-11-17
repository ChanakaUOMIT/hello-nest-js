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
  store(@Req() req: Request) {
    Logger.debug('Hi');
    console.log(req.body);
    // return req.body;
    return this.userService.create(req);
  }

  @Patch(':userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    console.log(req.body);
    // return req.body;
    return this.userService.update(req, param);
  }

  @Put(':userId')
  updatePut(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Get(':userId')
  getUser(@Param() param: { userId: number }) {
    // return params;
    return this.userService.getUser(param);
  }

  @Delete(':userId')
  deleteUser(@Param() param: { userId: number }) {
    // return param;
    return this.userService.delete(param);
  }
}
