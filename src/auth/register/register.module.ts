import { AuthService } from './../auth.service';
import { Module } from '@nestjs/common';
import { RegisterResolver } from './register.resolver';
import { ProfilePictrueResolver } from './profile-pictrue/profile-pictrue.resolver';
import { ProfilePictrueService } from './profile-pictrue/profile-pictrue.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.datatbase';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  providers: [
    RegisterResolver,
    ProfilePictrueResolver,
    ProfilePictrueService,
    AuthService,
  ],
})
export class RegisterModule {}
