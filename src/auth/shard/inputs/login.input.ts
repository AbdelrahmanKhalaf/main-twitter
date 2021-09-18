/* eslint-disable prettier/prettier */
import { IsNotEmpty,IsEmail } from 'class-validator';
import { InputType } from 'type-graphql';
import { ILogin } from './../interfacies/login.interface';
@InputType()
export class InputLogin implements ILogin {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;

}