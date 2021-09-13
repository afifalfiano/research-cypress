import { IsNotEmpty } from "class-validator";
import { Company } from "src/company/entities/company.entity";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    photo_profile?: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;

    company?: Company;

}
