import { sleep } from 'src/utils/classes/sleep';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { PostgresUserRepository } from './repository/postgres.user.repository';

@Injectable()
export class UserService {

    constructor(private postgresUserRepository: PostgresUserRepository) {}

    async test(): Promise<any | null> {
        return this.postgresUserRepository.usersMock;
    }

    async getAll(): Promise<any[] | null> {
        return this.postgresUserRepository.getData();
    }

    async getById(id: number): Promise<any | null> {
        return this.postgresUserRepository.getById(id);
    }

    async getUserPosts(id: number): Promise<any | null> {
        return this.postgresUserRepository.getUserPosts(id);
    }

    async getRawSql(): Promise<any | null> {
        return this.postgresUserRepository.getRawSql();
    }

    async create(data: any): Promise<any | null> {
        return this.postgresUserRepository.save(data);
    }

    async update(id: string, data: any): Promise<any | null> {
        return this.postgresUserRepository.update(id, data);
    }

    async delete(id: number): Promise<any | null> {
        return this.postgresUserRepository.delete(id);
    }
}

