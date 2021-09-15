import { IsNotEmpty } from "class-validator";
import { Company } from "src/company/entities/company.entity";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    photo_profile?: string;

    @IsNotEmpty()
    email: string;

    phone: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;

    company?: Company;

}
