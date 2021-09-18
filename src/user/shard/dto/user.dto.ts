/* eslint-disable prettier/prettier */
import { Int } from "@nestjs/graphql";
import { Field, ObjectType } from "type-graphql";
import { DTotweet } from "./tweets.dto";
/* eslint-disable prettier/prettier */
@ObjectType()
export class DtoUser {
    @Field()
    _id: string
    @Field()
    name: string
    @Field()
    email: string;
    @Field()
    password: string;
    @Field(() => DTotweet)
    tweets: [DTotweet]
    @Field(() => DtoUser)
    followings: [DtoUser]
    @Field(() => DtoUser)
    followers: [DtoUser]
    @Field(() => Int)
    followingsCount: number;
    @Field(() => Int)
    followersCount: number;
    @Field(() => Int)
    tweetsCount: number
    @Field()
    createdAt: Date;
    @Field()
    updatedAt: Date;
}