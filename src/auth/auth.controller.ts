import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthProtected } from './protected/auth.protected';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  login(@Body() input: { username: string; password: string }) {
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthProtected)
  @Get('me')
  getUserInfo(@Req() request: any) {
    return request.user;
  }
}
