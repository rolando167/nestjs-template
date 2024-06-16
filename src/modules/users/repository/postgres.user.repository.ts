import { PrismaService } from "src/core/config/databases/prisma.service";
import { IUserRepository } from "../interfaces/iuser.repository";
import { Injectable, NotFoundException } from "@nestjs/common";
import { SCHEMA_DB } from 'src/core/constants';

@Injectable()
export class PostgresUserRepository implements IUserRepository {
    constructor(private prisma: PrismaService) { }

    public readonly usersMock: any[] = [{
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

    async getData(): Promise<any> {
        return this.prisma.user.findMany({
            orderBy: [
                {
                    id: 'asc',
                },
            ],
        });
    }

    async getById(id: number): Promise<any> {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    async getUserPosts(id: number): Promise<any> {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                posts: true,
            },
        });
    }

    async getRawSql(): Promise<any> {
        const email = `prisma.io`;
        // const result = await this.prisma.$queryRaw`SELECT * FROM public."User" WHERE email = ${email}`
        const result = await this.prisma.$queryRawUnsafe(
            `SELECT * FROM ${SCHEMA_DB}."User" where email like '%${email}%'   `
        );

        return result;
    }

    async save(data: any): Promise<any> {
        console.log(data.name);
        return this.prisma.user.create({
            data: data
        });
    }

    async update(id: string, user: any): Promise<any> {
        return this.prisma.user.update({
            where: { id: Number(id) },
            data: { name: user.name },
        });
    }

    async delete(id: number): Promise<any> {
        const deleteUser = await this.prisma.user.delete({
            where: {
                id: id,
            },
        }).catch(() => {
            throw new NotFoundException(`Can't find item with id ${id}`);
        })
        return deleteUser;
        // throw new Error("Method not implemented.");
    }
}

