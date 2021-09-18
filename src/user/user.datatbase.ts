/* eslint-disable prettier/prettier */
import { DtoUser } from './shard/dto/user.dto';
import { DTotweet } from './shard/dto/tweets.dto';
import { IRegister } from './../auth/shard/interfacies/register.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User implements IRegister {
    
    @Prop({ required: true, default: "upload/default.jpg" })
    image: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    password: string;
    @Prop()
    tweets: [DTotweet]
    @Prop()
    followings: [DtoUser]
    @Prop()
    followers: [DtoUser]
    @Prop({ default: 0 })
    followingsCount: number;
    @Prop({ default: 0 })
    followersCount: number;
    @Prop({ default: 0 })
    tweetsCount: number
    @Prop({ default: Date.now() })
    createdAt: Date;
    @Prop({ default: Date.now() })
    updatedAt: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);