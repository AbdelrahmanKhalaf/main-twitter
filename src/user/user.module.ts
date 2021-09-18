import { TweetSchema } from './tweet/tweet.database';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TweetModule } from './tweet/tweet.module';
import { FollowingsModule } from './followings/followings.module';
import { FollowersModule } from './followers/followers.module';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { UserSchema } from './user.datatbase';

@Module({
  imports: [
    TweetModule,
    FollowingsModule,
    FollowersModule,
    MongooseModule.forFeature([{ name: "users", schema: UserSchema }, { name: 'tweets', schema: TweetSchema },
    ])
  ],
  providers: [UserService]
})
export class UserModule { }
