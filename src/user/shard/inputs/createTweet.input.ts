/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ObjectType } from '@nestjs/graphql';
import { ICreateTweet } from './../interfacies/createtweet.interface';
@ObjectType()
export class InputCreateTweet implements ICreateTweet {

   @IsNotEmpty()
    text: string;
}