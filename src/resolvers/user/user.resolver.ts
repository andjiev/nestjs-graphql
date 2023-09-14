import { Query, Resolver } from '@nestjs/graphql';
import { IUser, User } from 'src/models';
import { UserService } from 'src/services/user';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Query((returns) => [User])
    async getUsers(): Promise<IUser[]> {
        const users = await this.service.getUsers();
        return users;
    }
}
