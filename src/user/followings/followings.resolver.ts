/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { InpoutFollow } from './../shard/inputs/follow.input';
import { InputPagination } from './../shard/inputs/pagination.input';
import { DtoUser } from './../shard/dto/user.dto';
import { UserService } from './../user.service';
import { Context, Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGurd } from 'src/auth/shard/middleware/auth.gurd';

@Resolver()
export class FollowingsResolver {
    constructor(private readonly userService: UserService) { }
    @UseGuards(new AuthGurd())
    @Query(() => DtoUser)
    async getFollowedUser(@Context('user') user: DtoUser, @Args('pagination') pagination: InputPagination) {
        return this.userService.getUserFollowed(pagination, user._id)
    }
    @UseGuards(new AuthGurd())
    @Mutation(() => DtoUser)
    async follow(@Context('user') user: DtoUser, @Args('follow') follow: InpoutFollow) {
        return this.userService.createNewFollow(follow, user._id)
    }
}
