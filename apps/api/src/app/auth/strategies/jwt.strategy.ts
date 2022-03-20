import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { IAuthenticatedUserPayload } from '../auth.types';
import { UserService } from '../../user/user.service';
// import { UserService } from 'src/app/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: IAuthenticatedUserPayload) {
    /* const user = await this.userService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException();
    } */
    // return user;
    return {};
  }
}
