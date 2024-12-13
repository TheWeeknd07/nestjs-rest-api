import { Body, Controller, Delete, Get, Patch, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { UserService } from "./user.service";
import { EditUserDto } from "./dto";
import { GetUser } from "src/auth/decorator";
import { User } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    getUser(@GetUser() user: User) {
        return user;
    }

    @Patch()
    editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
        return this.userService.editUser(userId, dto);
    }

    @Delete()
    deleteUser(@GetUser('id') userId: number) {
        return this.userService.deleteUser(userId);
    }
}