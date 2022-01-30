import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateClientDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly user: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly mobile: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly cpf: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @IsEmail()
    readonly cnpj: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    readonly razaosocial: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly cep: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(250)
    readonly address: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly budget: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly typecustomer: string;
}