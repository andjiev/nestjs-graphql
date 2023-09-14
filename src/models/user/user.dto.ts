import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUser {
    @Field()
    name: string;

    @Field()
    age: number;
}