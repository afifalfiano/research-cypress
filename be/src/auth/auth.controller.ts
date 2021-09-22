import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto): Promise<any> {
    return await this.authService.login(authLoginDto);
  }

  @Post('logout')
  async logout(@Body('email') email: string): Promise<any> {
    return await this.authService.logout(email);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto,): Promise<any> {
    return await this.authService.register(createUserDto);
  }
}
