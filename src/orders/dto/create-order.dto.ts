import {
    IsDateString,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateOrderDto {

    @IsNotEmpty({
        message: 'both brothId and proteinId are required',
    })
    BrothId: number;


    @IsNotEmpty({
        message: 'both brothId and proteinId are required',
    })
    Proteinid: number;



}
