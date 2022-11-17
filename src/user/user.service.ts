import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Chanaka S. Wickramanayaka',
      email: 'chanakauomfit@gmail.com',
      note: 'from user-service',
    };
  }
}
