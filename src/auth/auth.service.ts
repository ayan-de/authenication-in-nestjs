import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string };
type AuthResult = { accessToken: string; userId: number; username: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  authenticate(input: AuthInput): AuthResult {
    const user = this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }
  validateUser(input: AuthInput): SignInData | null {
    const user = this.userService.findUserByName(input.username);

    if (user && user.password === input.password) {
      return {
        userId: user.userId,
        username: user.userName,
      };
    }
    return null;
  }

  signIn(user: SignInData): AuthResult {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };

    const accessToken = this.jwtService.sign(tokenPayload);

    return {
      accessToken,
      userId: user.userId,
      username: user.username,
    };
  }
}
