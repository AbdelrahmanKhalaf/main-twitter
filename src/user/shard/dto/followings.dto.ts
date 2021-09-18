/* eslint-disable prettier/prettier */
import { Field, ObjectType ,Int} from "@nestjs/graphql"
import { DtoUser } from "./user.dto"
@ObjectType()
export class DtoFollowings extends DtoUser{
    @Field()
    name: string
    @Field(() => DtoUser)
    followings: [DtoUser]
    @Field(() => Int)
    followingsCount:number
}