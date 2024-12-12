import { IsOptional, IsString } from "class-validator";

export  class EditBookmarkDto {
    @IsString()
    title?: string;

    @IsString()
    link?: string;

    @IsOptional()
    @IsString()
    description?: string;
}