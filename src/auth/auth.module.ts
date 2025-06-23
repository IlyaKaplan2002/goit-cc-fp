import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptModule } from '_utils/bcrypt/bcrypt.module';
import { Module } from '@nestjs/common';
import { TokenModule } from '../_utils/token/token.module';
import { UserModule } from 'user/user.module';

@Module({
  imports: [TokenModule, BcryptModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
