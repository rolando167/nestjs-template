import { IUserRepository } from "../interfaces/iuser.repository";

export class MongoUserRepository implements IUserRepository{
    constructor(){}
    getData(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getUserPosts(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getRawSql(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async save(data: any): Promise<any> {
        console.log("saveeeee");
        throw new Error("Method not implemented.");
    }

    async update(id: string, user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async delete(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}