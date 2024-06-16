import { IUserRepository } from "../interfaces/iuser.repository";

export class MockUserRepository implements IUserRepository{
    constructor(){}

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
        return this.usersMock;
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
    save(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

}