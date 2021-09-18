import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://abdo2020:01123689625@temwork-vxavl.mongodb.net/twitter?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
  ],
})
export class AppModule {}
