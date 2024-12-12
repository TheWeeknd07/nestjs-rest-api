import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
    constructor(
        private prisma: PrismaService
    ) {}
    async createBookmark(userId: number, dto: CreateBookmarkDto) {
        return await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto
            }
        });
    }

    async editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {
        return await this.prisma.bookmark.update({
            where: {
                id: bookmarkId,
                userId
            },
            data: {
                ...dto
            }
        })
    }

    async deleteBookmarkById(userId: number, bookmarkId: number) {
        return await this.prisma.bookmark.delete({
            where: {
                id: bookmarkId,
                userId
            }
        })
    }

    async getBookmarks(userId: number) {
        return await this.prisma.bookmark.findMany({
            where: {
                userId
            }
        })
    }

    async getBookmarkById(userId: number, bookmarkId: number) {
        return await this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkId,
                userId
            }
        })
    }
}
