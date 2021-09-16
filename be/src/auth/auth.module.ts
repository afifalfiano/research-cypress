import { Module } from '@nestjs/common';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async () => ({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: 10000 },}),
    inject: [ConfigService],
  }),],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
