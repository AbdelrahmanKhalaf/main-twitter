import { UserSchema } from './../user/user.datatbase';
import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RegisterModule,
    LoginModule,
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forFeature([
      { name: 'users', schema: UserSchema },
    ]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
