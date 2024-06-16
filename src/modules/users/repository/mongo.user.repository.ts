import { IUserRepository } from "./iuser.repository";

export class MongoUserRepository implements IUserRepository{
    constructor(){}
    getData(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    save(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}