/* eslint-disable prettier/prettier */
import { Field, ObjectType ,Int} from "@nestjs/graphql"
import { DtoUser } from "./user.dto"
import { DTotweet } from './tweets.dto';
@ObjectType()
export class DtoTweetUser extends DtoUser{
    @Field()
    name: string
    @Field(() => DTotweet)
    tweets: [DTotweet]
    @Field(() => Int)
    tweetsCount:number
}