import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class UsersDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @IsEmail()
    readonly email: string;
}