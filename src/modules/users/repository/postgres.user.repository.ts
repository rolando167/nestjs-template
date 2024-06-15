import { IUserRepository } from "./iuser.repository";

export class PostgresUserRepository implements IUserRepository{
    constructor(){}

    save(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}