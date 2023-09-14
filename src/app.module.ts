import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { controllers } from './controllers';
import { ServiceModule } from './services';
import { ResolverModule } from './resolvers/resolver.module';

const imports = [
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: 'schema.gql',
        sortSchema: true
    }),
    ServiceModule,
    ResolverModule
];

@Module({
    imports,
    controllers
})
export class AppModule {}
