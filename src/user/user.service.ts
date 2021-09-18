import { InpoutFollow } from './shard/inputs/follow.input';
import { InputPagination } from './shard/inputs/pagination.input';
/* eslint-disable @typescript-eslint/no-empty-function */
import { InputCreateTweet } from './shard/inputs/createTweet.input';
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from './tweet/tweet.database';
import { User } from './user.datatbase';
import { emailFound } from 'src/shard/helpers/search';
@Injectable()
export class UserService {
    constructor(
        @InjectModel('users') private readonly User: Model<User>,
        @InjectModel('tweets') private readonly Tweet: Model<Tweet>) { }
    //- User can create a new tweet
    //create new tweet pasde on id user and update array tweet of user and add in table tweet with id of user
    async createTweet(userId: string, data: InputCreateTweet) {
        //crete new tweet
        //check is data vaild  
        if (!data) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: ' please inter  vailed date',
        }, HttpStatus.BAD_REQUEST);
        //User check found in database or not 
        const user = await this.User.findById(userId)
        if (!user) throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'user not foun',
        }, HttpStatus.NOT_FOUND);
        //add new tweet in table tweets 
        const Newtweet = new this.Tweet(data)
        Newtweet.userId = userId
        if (!Newtweet.userId) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'please give me userID',
        }, HttpStatus.BAD_REQUEST);
        //update array tweet of user 
        await this.User.updateOne({ _id: userId }, {
            $push: {
                tweets: data
            },
            $inc: { tweetsCount: 1 }
        }, { new: true })
        //get user after updates to see this async
        const endUSer = await this.User.findById(userId)
        Newtweet.save()
        return await endUSer
    }
    //- User can list his tweets history
    async getUserTweetsHistory(pagination: InputPagination, userId: string) {
        const lastIndex = pagination.page * pagination.limit - 1;
        const firstIndex = lastIndex - (pagination.limit - 1);
        const tweets: any = await this.User.find({ _id: userId })
        const tweettFillter = tweets[0].tweets.slice(firstIndex || 0, lastIndex + 1 || 4)
        return tweettFillter
    }
    //- User can follow other user
    //create new follow pasde on id user and update array tweet of user 
    async createNewFollow(data: InpoutFollow, meId: string) {
        //check is data vaild  
        if (!data) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: ' please enter valid data',
        }, HttpStatus.BAD_REQUEST);
        //me check found in database or not 
        const me = await this.User.findById(meId)
        if (!me) throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'me not found or not login  ',
        }, HttpStatus.NOT_FOUND);
        //user check found in database or not 
        const user = await this.User.findById(data.userIdFollow)
        if (!user) throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'the user not found ',
        }, HttpStatus.NOT_FOUND);
        //user check if already follow befor  
        const check = emailFound(me.email, user.followers)
        if (check) throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'you already following this the user',
        }, HttpStatus.NOT_FOUND);
        //update array folloing of me
        await this.User.updateOne({ _id: me._id }, {
            $push: {
                followings: {
                    name: user.name,
                    image: user.image,
                    email: user.email
                }
            },
            $inc: { followingsCount: 1 }
        }, { new: true })
        //update array followrs of user
        await this.User.updateOne({ _id: user._id }, {
            $push: {
                followers: {
                    name: me.name,
                    image: me.image,
                    email: me.email
                }
            },
            $inc: { followersCount: 1 }
        }, { new: true })
        //get user after updates to see this async
        const endUSer = await this.User.findById(meId)
        return endUSer
    }
    //- User can list his followers
    async getUserFollowers(pagination: InputPagination, userId: string) {
        const lastIndex = pagination.page * pagination.limit - 1;
        const firstIndex = lastIndex - (pagination.limit - 1);
        const followers: any = await this.User.find({ _id: userId })
        const followersFillter = followers[0].followers.slice(firstIndex || 0, lastIndex + 1 || 4)
        return followersFillter
    }
    //- User can list his followed users
    async getUserFollowed(pagination: InputPagination, userId: string) {
        const lastIndex = pagination.page * pagination.limit - 1;
        const firstIndex = lastIndex - (pagination.limit - 1);
        const followed: any = await this.User.find({ _id: userId })
        const followedFillter = followed[0].followings.slice(firstIndex || 0, lastIndex + 1 || 4)
        return followedFillter
    }
}
