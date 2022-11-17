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

@Controller('note')
export class NoteController {
  @Get('')
  getNotes() {
    return {
      name: 'Chanaka',
      email: 'chanakauomfit@gmail.com',
    };
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

  @Get(':noteId')
  getNote(@Param() params: { noteId: number }) {
    return params;
  }

  @Delete(':noteId')
  deleteNote(@Param() params: { noteId: number }) {
    return params;
  }
}
