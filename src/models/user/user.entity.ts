import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    @Field()
    name: string;

    @Column({ type: 'int' })
    @Field()
    age: number;
}