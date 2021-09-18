/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { ProfilePictrueService } from './profile-pictrue.service';
import { Upload } from '../../shard/interfacies/pictute.type';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from "fs"
import { Args, Context } from '@nestjs/graphql';
import { DtoUser } from 'src/user/shard/dto/user.dto';
import { AuthGurd } from 'src/auth/shard/middleware/auth.gurd';
import { UseGuards } from '@nestjs/common';
@Resolver()
export class ProfilePictrueResolver {
    constructor(private readonly profilePicServer: ProfilePictrueService) { }
    @UseGuards(new AuthGurd())
    @Mutation(() => DtoUser)
    async addProfilePicture(@Arg('picture', () => GraphQLUpload) FileUpload: Upload, @Context('user')user: DtoUser) {
        new Promise(async (resolv, reject) => {
            const location = __dirname + `/../../../../upload/${FileUpload.filename}`
            FileUpload.createReadStream()
            //write new path to picture is spcfiy 
                .pipe(createWriteStream(location))
                .on("finish", () => resolv(true))
                .on('error', () => reject(true))
        })
        //update in datebase path picture update 
        this.profilePicServer.uploadImage(FileUpload, user._id)
        return {
            URL: `http://localhost:3000/upload/${FileUpload.filename}`
        }
    }
}
