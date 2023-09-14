import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/services';
import { UserResolver } from './user';

@Module({
    imports: [ServiceModule],
    providers: [UserResolver]
})
export class ResolverModule {}
