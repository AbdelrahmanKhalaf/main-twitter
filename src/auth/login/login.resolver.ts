//- User authentication module (Login)
/* eslint-disable prettier/prettier */
import { InputLogin } from './../shard/inputs/login.input';
import { DtoUser } from './../../user/shard/dto/user.dto';
import { AuthService } from './../auth.service';
import { Args, Context, Mutation, Resolver,Query } from '@nestjs/graphql';
import {  UseGuards } from '@nestjs/common';
import { AuthGurd } from '../shard/middleware/auth.gurd';

@Resolver()
export class LoginResolver {
    constructor(private readonly authService: AuthService) { }
    @Query(() => DtoUser)
    @UseGuards(new AuthGurd())
    async me(@Context('user') user: DtoUser) {
        return this.authService.me(user._id)
    }
    @Mutation(() => DtoUser)
    async signin(@Args('input') input: InputLogin) {
        return this.authService.login(input)
    }
}
