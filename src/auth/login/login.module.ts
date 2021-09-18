import { AuthService } from './../auth.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.datatbase';
import { LoginResolver } from './login.resolver';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  // eslint-disable-next-line prettier/prettier
  providers: [LoginResolver,AuthService],
})
export class LoginModule {}
