/* eslint-disable prettier/prettier */
import { ObjectType } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"
import { Int } from '@nestjs/graphql';
import { Field } from "type-graphql"
@ObjectType()
export class InputPagination {
    @Field(() => Int)
    @IsNotEmpty()
    limit: number
    @Field(() => Int)
    @IsNotEmpty()
    page: number
}