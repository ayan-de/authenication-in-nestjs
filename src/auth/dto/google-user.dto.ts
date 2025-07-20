import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GoogleUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  picture: string;

  @IsString()
  @IsNotEmpty()
  accessToken: string;
}
