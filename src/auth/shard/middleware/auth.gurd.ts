/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus } from '@nestjs/common';
import * as jwt from "jsonwebtoken"
import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGurd implements CanActivate {
    //chake token user exited in header or not 
    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context).getContext();
        if (!ctx.headers.authorization) {
            return false
        }
        ctx.user = await this.vaildateToken(ctx.headers.authorization)
        console.log(ctx.user);
        return true;
    }
    //chacke the token in headers is vaild  and decoded
    async vaildateToken(auth: string) {
        const chack = auth.split(' ')[0] !== 'Bearer'
        if (chack) {
            throw new HttpException('Invaild Token', HttpStatus.UNAUTHORIZED)
        }
        const token = auth.split(' ')[1]
        try {
            return await jwt.verify(token, 'secret')
        } catch (err) {
            throw new HttpException('Invaild Token', HttpStatus.UNAUTHORIZED)
        }
    }
}