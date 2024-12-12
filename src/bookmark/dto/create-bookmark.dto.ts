import { IsOptional, IsString } from "class-validator";

export  class CreateBookmarkDto {
    @IsString()
    title: string;

    @IsString()
    link: string;

    @IsOptional()
    @IsString()
    description?: string;
}