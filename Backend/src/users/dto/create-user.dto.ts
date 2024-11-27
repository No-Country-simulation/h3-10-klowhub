import { IsAlpha, IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsAlpha()
    name: string

    @IsAlpha()
    lastname: string

    @IsString()
    birthday: string

    @IsEmail()
    email: string

    @IsString()
    profile_image: string

    @MaxLength(8)
    @MinLength(4)
    @IsNotEmpty()
    password: string

    role_id: number // revisar si se va a manejar los roles dentro de la tabla user
}
