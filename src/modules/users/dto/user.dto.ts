import {
      IsInt
    , IsDate
    , IsEmail
    , IsString
    , IsBoolean
    , MinLength
    , IsNotEmpty
    , IsNumberString
} from 'class-validator';

export class UserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsNumberString()
    readonly password: string;

    @IsBoolean()
    readonly confirmed?: boolean;

    @IsInt()
    @MinLength(1)
    readonly status?: number;

    @IsDate()
    readonly date_register?: Date;
}

