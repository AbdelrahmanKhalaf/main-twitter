/* eslint-disable prettier/prettier */
import { ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { IFollow } from './../interfacies/createFollow.interface';
@ObjectType()
export class InpoutFollow implements IFollow {
    @IsNotEmpty()
    userIdFollow: string;

}