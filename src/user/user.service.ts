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

  create(body: any) {
    return body;
  }

  update(body: any, param: { userId: number }) {
    return { body: body, param };
  }

  delete(param: { userId: number }) {
    return param;
  }

  getUser(param: { userId: number }) {
    return param;
  }
}
