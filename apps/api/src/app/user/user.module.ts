import { Module } from '@nestjs/common';

// controller
import { UserController } from './user.controller';

// services
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
