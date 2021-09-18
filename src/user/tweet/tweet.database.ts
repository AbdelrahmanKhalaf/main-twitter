/* eslint-disable prettier/prettier */
import { ICreateTweet } from './../shard/interfacies/createtweet.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type CatDocument = Tweet & Document;

@Schema()
export class Tweet implements ICreateTweet {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' ,required:true})
  userId: string;
  @Prop({required:true})
  text: string;
  @Prop({required:true , default:Date.now()})
  createdAt: Date;
  @Prop({required:true , default:Date.now()})
  updatedAt: Date;
  @Prop({required:true , default:0})
  favoriteCount: number
  @Prop({required:true , default:false})
  isFavorited: boolean
}
export const TweetSchema = SchemaFactory.createForClass(Tweet);