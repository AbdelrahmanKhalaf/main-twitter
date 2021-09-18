/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { InputPagination } from './../shard/inputs/pagination.input';
import { DtoUser } from './../shard/dto/user.dto';
import { UserService } from './../user.service';
import { Resolver , Query ,Args,Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGurd } from 'src/auth/shard/middleware/auth.gurd';
@Resolver()
export class FollowersResolver {
    constructor(private readonly userService : UserService){}
    @UseGuards(new AuthGurd())
    @Query(()=>DtoUser)
    async getFollowersUser(@Context('user') user:DtoUser ,@Args('pagination') pagination:InputPagination){
       return this.userService.getUserFollowers(pagination,user._id)
    }
}
