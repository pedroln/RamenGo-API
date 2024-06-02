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
    brothId: number;


    @IsNotEmpty({
        message: 'both brothId and proteinId are required',
    })
    proteinId: number;



}
