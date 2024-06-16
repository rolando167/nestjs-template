export interface IUserRepository {
    getData():Promise<any | null>;
    getById(id: number): Promise<any | null>;
    getUserPosts(id: number): Promise<any | null>;
    getRawSql():Promise<any | null>;
    save(data: any): Promise<any | null>;
    update(id: string, user: any): Promise<any | null>;
    delete(id: number): Promise<any | null>;
}