import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser, User } from 'src/models';
import { UserService } from 'src/services/user';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly service: UserService) { }

    @Query((returns) => [User])
    async getUsers(): Promise<User[]> {
        return await this.service.getUsers();
    }

    @Mutation(returns => User)
    async createUser(@Args('model') model: CreateUser): Promise<User> {
        return await this.service.createUser(model);
    }
}
