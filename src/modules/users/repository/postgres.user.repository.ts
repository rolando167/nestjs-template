import { PrismaService } from "src/core/config/databases/prisma.service";
import { IUserRepository } from "./iuser.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostgresUserRepository  {
    constructor( private  prisma: PrismaService) { }

    async getData(): Promise<any> {
        console.log("getttttt");
        return   this.prisma.user.findMany({
            orderBy: [
                {
                    id: 'asc',
                },
            ],
        });
    }

    async save(data: any): Promise<any> {
        console.log("saveeeee");
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<any> {
        console.log("get id");
        throw new Error("Method not implemented.");
    }
}

