//service auth all method need to auth exited in here
import { ObjectId } from 'mongoose';
/* eslint-disable @typescript-eslint/no-empty-function */
import { InputLogin } from './shard/inputs/login.input';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DtoUser } from './../user/shard/dto/user.dto';
import { InputRegister } from './shard/inputs/register.input';
import * as jwt from 'jsonwebtoken';
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/user.datatbase";
import becrypt from "bcryptjs"
@Injectable()
export class AuthService {
    constructor(@InjectModel('users') private readonly User: Model<User>) { }
    //Register 
    async createUser(data: InputRegister): Promise<DtoUser> {
        //Email check found becuse email must be uniq
        const chakeEmail = await this.User.find({ email: data.email })
        if (chakeEmail[0]) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'Already e-mail exists',
        }, HttpStatus.BAD_REQUEST);
        //Name check found becuse name must be uniq
        const chakeName = await this.User.find({ name: data.name })
        if (chakeName[0]) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'Already name exists',
        }, HttpStatus.BAD_REQUEST);
        // const salt = 10
        const user = new this.User(data)
        // const hashPassword = await becrypt.hash(data.password, salt)
        // user.password = hashPassword
        return await user.save();
    }
    //Create Token basde in jwt of (id and email) user to set coded in header
    async createToken({ email }: InputLogin, _id: ObjectId) {
        return jwt.sign({ email, _id }, "secret")
    }
    //Login
    async login(data: InputLogin) {
        //Email and password check found 
        const chack = await this.User.find({ email: data.email })
        // const isMatch = await becrypt.compare(data.password, chack[0].password);
        if (!chack[0] ) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'password / email invaild',
        }, HttpStatus.BAD_REQUEST);
        return {
            token: this.createToken(data, chack[0]._id)
        }
    }
    //get my details 
    async me(Id: string) {
        return await this.User.findById(Id)
    }

}
