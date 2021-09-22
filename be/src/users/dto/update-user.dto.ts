import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({'required': false, 'nullable': true})
    @IsNotEmpty()
    firstName?: string;

    @ApiProperty({'required': false, 'nullable': true})
    @IsNotEmpty()
    lastName?: string;

    @ApiProperty({'required': false, 'nullable': true})
    photo_profile?: any;

    @ApiProperty({'required': false, 'nullable': true})
    @IsEmail()
    email?: string;

    @ApiProperty({'required': false, 'nullable': true})
    phone?: string;

    @ApiProperty({'required': false, 'nullable': true})
    city?: string;

    @ApiProperty({'required': false, 'nullable': true})
    country?: string;

    @ApiProperty({'required': false, 'nullable': true})
    password?: string

    @ApiProperty({'required': false, 'nullable': true})
    jwt_token?: string;

    @ApiProperty({'required': false, 'nullable': true})
    company?: Company;
}
