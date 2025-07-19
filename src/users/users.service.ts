import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  userName: string;
  password: string;
};

const user: User[] = [
  {
    userId: 1,
    userName: 'user1',
    password: 'password1',
  },
  {
    userId: 2,
    userName: 'user2',
    password: 'password2',
  },
];

@Injectable()
export class UsersService {
  findUserByName(username: string): User | undefined {
    return user.find((user) => user.userName === username);
  }
}
