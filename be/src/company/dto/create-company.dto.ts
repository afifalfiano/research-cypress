import { IsNotEmpty } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateCompanyDto {
    @IsNotEmpty()
    company_name: string;
    
    user?: User[]
}
