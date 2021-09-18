//- User authentication module (Register)
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { InputRegister } from './../shard/inputs/register.input';
import { DtoUser } from './../../user/shard/dto/user.dto';
import { AuthService } from './../auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class RegisterResolver {
    constructor(private readonly AuthServer: AuthService) { }
    @Mutation(() => DtoUser)
    async signup(@Args('input') input: InputRegister) {
        return this.AuthServer.createUser(input)
    }
}
