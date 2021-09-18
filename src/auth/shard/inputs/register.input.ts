/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { InputType } from 'type-graphql';
import { IRegister } from './../interfacies/register.interface';
@InputType()
export class InputRegister implements IRegister {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    image: string;
}
