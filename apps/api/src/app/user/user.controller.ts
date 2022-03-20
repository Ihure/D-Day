import { Request, Response } from 'express';
import {
  Controller,
  Post,
  Put,
  Get,
  Res,
  Req,
  UseGuards,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}
}
