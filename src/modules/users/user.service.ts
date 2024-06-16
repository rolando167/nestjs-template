import { sleep } from 'src/utils/classes/sleep';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/dependency.repository';

@Injectable()
export class UserService {

    constructor(private userRepository: UserRepository) {}

    async test(): Promise<any | null> {
        return this.userRepository.getUserRepository().getData();
    }

    async getAll(): Promise<any[] | null> {
        return this.userRepository.getUserRepository().getData();
    }

    async getById(id: number): Promise<any | null> {
        return this.userRepository.getUserRepository().getById(id);
    }

    async getUserPosts(id: number): Promise<any | null> {
        return this.userRepository.getUserRepository().getUserPosts(id);
    }

    async getRawSql(): Promise<any | null> {
        return this.userRepository.getUserRepository().getRawSql();
    }

    async create(data: any): Promise<any | null> {
        return this.userRepository.getUserRepository().save(data);
    }

    async update(id: string, data: any): Promise<any | null> {
        return this.userRepository.getUserRepository().update(id, data);
    }

    async delete(id: number): Promise<any | null> {
        return this.userRepository.getUserRepository().delete(id);
    }
}

