import { TweetSchema } from './../tweet/tweet.database';
import { UserService } from './../user.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user.datatbase';
import { FollowingsResolver } from './followings.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'users', schema: UserSchema },
      { name: 'tweets', schema: TweetSchema },
    ]),
  ],
  providers: [FollowingsResolver, UserService],
})
export class FollowingsModule {}
