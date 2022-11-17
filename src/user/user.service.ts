import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Chanaka S. Wickramanayaka',
      email: 'chanakauomfit@gmail.com',
      note: 'from user-service',
    };
  }

  create(req: Request) {
    return req.body;
  }

  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }

  delete(param: { userId: number }) {
    return param;
  }

  getUser(param: { userId: number }) {
    return param;
  }
}
