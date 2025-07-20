import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JW_SECRET } from 'src/configs/jwt-secret';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JW_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
