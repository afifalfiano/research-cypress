import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    firstName?: string;

    @IsNotEmpty()
    lastName?: string;

    photo_profile?: any;

    email?: string;

    phone?: string;

    city?: string;

    country?: string;

    password?: string

    jwt_token?: string;

    company?: Company;
}
