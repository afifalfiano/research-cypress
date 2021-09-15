import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    firstName?: string;

    @IsNotEmpty()
    lastName?: string;

    @IsNotEmpty()
    photo_profile?: any;

    @IsNotEmpty()
    email?: string;

    @IsNotEmpty()
    phone?: string;

    @IsNotEmpty()
    city?: string;

    @IsNotEmpty()
    country?: string;

    company?: Company;
}
