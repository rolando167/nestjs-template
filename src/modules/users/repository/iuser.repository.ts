export interface IUserRepository {
    save(data: any): Promise<any | null>;
    getById(id: string): Promise<any | null>;
}