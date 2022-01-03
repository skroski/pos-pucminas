import { ArrayMinSize, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { UsersDTO } from "../../users/dto/create-user.dto";
import { Type } from "class-transformer";

export class ServiceDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    @MaxLength(150)
    readonly excerpt: string;


    @IsNotEmpty()
    @ValidateNested({each : true})
    @Type(() => UsersDTO)
    @ArrayMinSize(1)
    //@IsNotEmptyObject({ each : true})
    readonly users: UsersDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(50)
    @MaxLength(250)
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    readonly type: string;

}