/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Upload } from 'src/auth/shard/interfacies/pictute.type';
import { User } from 'src/user/user.datatbase';

@Injectable()
export class ProfilePictrueService {
    constructor(@InjectModel('users') private readonly User: Model<User>,) {
    }
    //upload image user in file upload and update path the image in image of user
    async uploadImage(fileUpload: Upload, userId: string): Promise<any> {
        const user = await this.User.findById(userId);
        if (!user) return new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'user not foun',
        }, HttpStatus.NOT_FOUND);
        return await this.User.updateOne({ _id: userId }, {
            $set: {
                image: "upload/" + fileUpload.filename
            }
        })
    }
}

