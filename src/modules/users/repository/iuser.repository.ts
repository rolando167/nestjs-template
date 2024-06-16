export interface IUserRepository {
    getData():Promise<any | null>;
    save(data: any): Promise<any | null>;
    getById(id: string): Promise<any | null>;
}