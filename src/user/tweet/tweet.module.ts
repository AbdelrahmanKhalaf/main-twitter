import { TweetSchema } from './tweet.database';
import { UserService } from './../user.service';
import { Module } from '@nestjs/common';
import { TweetResolver } from './tweet.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user.datatbase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'users', schema: UserSchema },
      { name: 'tweets', schema: TweetSchema },
    ]),
  ],
  providers: [TweetResolver, UserService],
})
export class TweetModule {}
