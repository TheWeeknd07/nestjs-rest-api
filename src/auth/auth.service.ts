import { ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
@Injectable({})
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) {}

    async signup(dto: AuthDto) {
        try {
            // generate the password
            const hash = await argon.hash(dto.password);
            // save the new user in the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash: hash
                }
            })
    
            // return the saved user
        return this.signToken(user.id, user.email);
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }

    async signin(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });

        if(!user) throw new ForbiddenException('Credentials incorrect');

        const pwMatches = await argon.verify(user.hash, dto.password);

        if(!pwMatches) throw new ForbiddenException('Credentials incorrect');

        return this.signToken(user.id, user.email);
    }

    async signToken(userId: number, email: string): Promise<{access_token: string}> {
        const payload = {
            sub: userId,
            email
        }
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret
        });
        return { access_token: token };
    }
}