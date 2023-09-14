import { Module } from '@nestjs/common';

// Providers
import { UserService } from './user';

@Module({
    providers: [UserService],
    exports: [UserService]
})
export class ServiceModule {}
