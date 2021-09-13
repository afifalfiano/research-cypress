import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MulterModule.register({
    dest: './photo-profile',
  })],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
