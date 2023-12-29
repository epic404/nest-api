import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  testAuth(): any {
    return { status: 'OK' };
  }
}
