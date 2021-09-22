import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Company } from "src/company/entities/company.entity";

export class CreateUserDto {
    @ApiProperty({'required': true})
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({'required': false, 'nullable': true})
    lastName?: string;

    @ApiProperty({'required': false, 'nullable': true})
    photo_profile?: string;

    @ApiProperty({'required': true})
    @IsEmail()
    email: string;

    @ApiProperty({'required': false, 'nullable': true})
    phone?: string;

    @ApiProperty({'required': false, 'nullable': true})
    city?: string;

    @ApiProperty({'required': false, 'nullable': true})
    country?: string;

    @ApiProperty({'required': true})
    password: string

    @ApiProperty({'required': false, 'nullable': true})
    jwt_token?: string;

    @ApiProperty({'required': false, 'nullable': true})
    company?: Company;

}
