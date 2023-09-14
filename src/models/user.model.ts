import { Field, ObjectType } from '@nestjs/graphql';

export interface IUser {
    id: number;
    name: string;
    age: number;
}

@ObjectType({ description: 'user' })
export class User implements IUser {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    age: number;
}
