import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  validate(email: string, password: string): any {
    return { email, password };
  }
}
