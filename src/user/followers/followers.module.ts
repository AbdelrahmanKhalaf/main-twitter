import { UserService } from './../user.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TweetSchema } from '../tweet/tweet.database';
import { UserSchema } from '../user.datatbase';
import { FollowersResolver } from './followers.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'users', schema: UserSchema },
      { name: 'tweets', schema: TweetSchema },
    ]),
  ],
  providers: [FollowersResolver, UserService],
})
export class FollowersModule {}
