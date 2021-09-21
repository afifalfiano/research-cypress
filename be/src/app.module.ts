import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';
import configSqlite from 'configorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configSqlite), UsersModule, CompanyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
