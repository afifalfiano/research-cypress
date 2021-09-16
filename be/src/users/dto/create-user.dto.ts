import { IsNotEmpty } from "class-validator";
import { Company } from "src/company/entities/company.entity";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    lastName?: string;

    photo_profile?: string;

    email: string;

    phone?: string;

    city?: string;

    country?: string;

    password: string

    jwt_token?: string;

    company?: Company;

}
