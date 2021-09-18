/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputCreateTweet } from './../shard/inputs/createTweet.input';
import { UserService } from './../user.service';
import { Mutation, Query, Resolver, Context, Args } from '@nestjs/graphql';
import { DTotweet } from '../shard/dto/tweets.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGurd } from 'src/auth/shard/middleware/auth.gurd';
import { DtoUser } from '../shard/dto/user.dto';
import { InputPagination } from './../shard/inputs/pagination.input';
@Resolver()
export class TweetResolver {
    constructor(private readonly userService: UserService) { }
    @UseGuards(new AuthGurd())
    @Query(() => DTotweet)
    async getTweetsUser(@Context('user') user: DtoUser, @Args('pagination') pagination: InputPagination) {
        return this.userService.getUserTweetsHistory(pagination,user._id)
    }
    @UseGuards(new AuthGurd())
    @Mutation(() => DTotweet)
    async cteateNewTweet(@Context('user') user: DtoUser, @Args('input') input: InputCreateTweet) {
        return this.userService.createTweet(user._id, input)
    }

}
