/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from "@nestjs/graphql"
import { DtoUser } from "./user.dto"
@ObjectType()
export class DtoFollowers extends DtoUser {
    @Field()
    name: string
    @Field(() => DtoUser)
    followers: [DtoUser]
    @Field(()=> Int)
    followersCount: number;
}