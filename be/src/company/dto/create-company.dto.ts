import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateCompanyDto {
    @ApiProperty({required: true})
    @IsNotEmpty()
    company_name: string;
    
    user?: User[]
}
