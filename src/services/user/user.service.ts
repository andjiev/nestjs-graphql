import { Injectable } from '@nestjs/common';
import { IUser } from 'src/models';

@Injectable()
export class UserService {
    getUsers(): IUser[] {
        const users: IUser[] = [
            {
                id: 1,
                name: 'User 1',
                age: 20
            },
            {
                id: 2,
                name: 'User 2',
                age: 25
            }
        ];

        return users;
    }
}
