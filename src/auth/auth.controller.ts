import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthProtected } from './protected/auth.protected';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { username: string; password: string }) {
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthProtected)
  @Get('me')
  getUserInfo(@Req() request: any) {
    return request.user;
  }
}
