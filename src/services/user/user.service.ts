import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUser, User } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>
    ) { }

    getUsers(): Promise<User[]> {
        return this.repository.find();
    }

    createUser(model: CreateUser): Promise<User> {
        const user: User = new User();
        user.name = model.name;
        user.age = model.age;
        return this.repository.save(user);
    }
}
