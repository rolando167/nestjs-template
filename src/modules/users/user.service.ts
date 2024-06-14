import { sleep } from 'src/utils/classes/sleep';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
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

    async getAll(): Promise<any[]> {
        //await sleep(3000);
        return await this.className;
    }

    async getUsers(): Promise<any[] | null> {
        return this.prisma.user.findMany();
    }

    async getById(id: number): Promise<any | null> {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    create(user: any): any {
        console.log(user.title);
        return `This action returns a 📄 2024`;
    }

    update(id: string, user: any): any {
        return `This action returns a 📄 2024`;
    }

    delete(id: number): any {
        return this.className.filter(p => p.id !== id);
    }
}

