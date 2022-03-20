import { Strategy } from 'passport-jwt';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


import { ConfigModule } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';

// controller
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';

// service
import { AuthService } from './auth.service';

// Strategy
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

// modules
import { UserModule } from '../user/user.module';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION,
      },
    }),
    UserModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
