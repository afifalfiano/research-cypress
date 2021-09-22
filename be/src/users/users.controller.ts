import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, Query, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { of } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('XYZ')
@ApiTags('users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UseInterceptors(FileInterceptor('photo_profile',
      {
        storage: diskStorage({
          destination: './photo-profile', 
          filename: (req, file, cb) => {
          return cb(null, `${file.originalname}`)
        }
        })
      }
    )
    )
  create(@Body() createUserDto: CreateUserDto, @UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log(createUserDto);
    if (file !== undefined) {
      createUserDto.photo_profile = file.originalname || file.filename;
    }
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({ type: CreateUserDto, isArray: true })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/profile')
  profile(@Query('filename') filename, @Res() res) {
    console.log(filename);
    return res.sendFile(join(process.cwd(), 'photo-profile/' + filename));
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  findOneByEmail(@Param('email') email: string) {
    console.log(email);
    return this.usersService.findOneByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('photo_profile',
      {
        storage: diskStorage({
          destination: './photo-profile', 
          filename: (req, file, cb) => {
          return cb(null, `${file.originalname}`)
        }
        })
      }
    )
    )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UploadedFile() file: Express.Multer.File) {
    console.log(updateUserDto)
    if (file !== undefined) {
      updateUserDto.photo_profile = file.originalname || file.filename;
    }
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
