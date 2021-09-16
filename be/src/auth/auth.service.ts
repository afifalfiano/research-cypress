import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}
    async login(authLoginDto: AuthLoginDto): Promise<any> {
        const user = await this.validateUser(authLoginDto);
    
        const payload = {
          userId: user.id,
        };
    
        const token = {
          user: {
            name: user.firstName + ' ' + user.lastName,
            email: user.email,
          },
          access_token: this.jwtService.sign(payload),
        };
    
        await this.userService.update(user.id, {
          jwt_token: token.access_token,
        });
        return token;
      }
    
      async logout(email: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
    
        await this.userService.update(user.id, {
          jwt_token: null,
        });
    
        return {
          status: true,
          message: 'Success Logout',
        };
      }

      async register(users: CreateUserDto): Promise<any> {
        const user = await this.userService.create(users);
        console.log(user);
        return {
          status: true,
          message: 'Success Register',
        };
      }
    
      async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
        const { email, password } = authLoginDto;
    
        const user = await this.userService.findOneByEmail(email);
        console.log(user);
        if (password !== user.password) {
          throw new UnauthorizedException();
        }
    
        return user;
      }
}
