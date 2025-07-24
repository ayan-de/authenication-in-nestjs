import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_DB_URL,
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
      database: 'nestjs-type-orm',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
