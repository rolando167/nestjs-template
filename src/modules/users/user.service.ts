import { sleep } from 'src/utils/classes/sleep';
import { UserDto } from './dto/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/config/databases/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    private readonly className: any[] = [{
        id: 1,
        name: 'A SPA app',
        email: 'aspa@test.com',
        icon: '😄',
    },
    {
        id: 2,
        name: 'A Nest API :D',
        email: 'anest@test.com',
        icon: '🐺',
    }];

    async getAll(): Promise<any[] | null> {
        return await this.prisma.user.findMany();
    }

    async getById(id: number): Promise<any | null> {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    async getUserPosts(id: number): Promise<any | null> {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
              posts: true,
            },
        });
    }

    async create(user: any): Promise<any | null> {
        console.log(user.name);
        return this.prisma.user.create({
            data: user
        });
    }

    update(id: string, user: any): any {
        return `This action returns a 📄 2024`;
    }

    async delete(id: number): Promise<any | null> {
        const deleteUser = await this.prisma.user.delete({
            where: {
              id: id,
            },
        }).catch(() => {
            throw new NotFoundException(`Can't find item with id ${id}`);
        })
        return deleteUser;
    }
}

