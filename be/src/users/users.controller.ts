import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { of } from 'rxjs';

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
    createUserDto.photo_profile = file.originalname || file.filename;
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/profile')
  profile(@Query('filename') filename, @Res() res) {
    console.log(filename);
    return res.sendFile(join(process.cwd(), 'photo-profile/' + filename));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
