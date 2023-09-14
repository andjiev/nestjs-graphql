import { Module } from '@nestjs/common';
import { UserService } from './user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService]
})
export class ServiceModule { }
