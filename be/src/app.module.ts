import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import configSqlite from 'configorm';

@Module({
  imports: [TypeOrmModule.forRoot(configSqlite), UsersModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
