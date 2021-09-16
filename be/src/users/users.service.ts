import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const emailExist = await this.findOneByEmail(createUserDto.email);
    console.log(emailExist, 'cek');
    if (createUserDto.email === emailExist?.email) {
      throw new ConflictException();
    } else {
      return await this.userRepository.save(createUserDto);
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({relations: ['company']});
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {email: email}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userRepository.update(id, {
      ...updateUserDto
    });
  }

  async remove(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
