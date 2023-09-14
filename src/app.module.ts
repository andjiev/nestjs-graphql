import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { controllers } from './controllers';
import { ServiceModule } from './services';
import { ResolverModule } from './resolvers';

const imports = [
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: 'schema.gql',
        sortSchema: true
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'PostgresSecret123!',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
    }),
    ServiceModule,
    ResolverModule
];

@Module({
    imports,
    controllers
})
export class AppModule {}
