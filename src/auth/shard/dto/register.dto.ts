/* eslint-disable prettier/prettier */
import { IRegister } from './../interfacies/register.interface';
export class DRegister implements IRegister {
    name: string;
    password: string;
    email: string;
    image: string;
    tweets:Array<any>;
    countTweets:number;
}