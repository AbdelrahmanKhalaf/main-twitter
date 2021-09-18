/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { ID ,Int} from '@nestjs/graphql';
import { Field, ObjectType } from 'type-graphql';
import { ICreateTweet } from './../interfacies/createtweet.interface';
@ObjectType()
export class DTotweet implements ICreateTweet {
    @Field(()=>ID)
    userId:string;
    @Field()
    text: string;
    @Field(()=>Int)
    favoriteCount: number
    @Field()
    isFavorited: Boolean
    @Field()
    createdAt: Date
    @Field()
    updatedAt: Date
}