import { sleep } from 'src/utils/classes/sleep';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private readonly className: any[] = [{
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

    async getAll(): Promise<any[]> {
        //await sleep(3000);
        return await this.className;
    }

    async getById(id: number): Promise<any[] | UserDto> {
        const data = await this.getAll();
        return data.filter(p => p.id === id);
    }

    create(user: any): any {
        console.log(user.title);
        return `This action returns a 📄 2024`;
    }

    update(id: string, user: any): any {
        return `This action returns a 📄 2024`;
    }

    delete(id: number): any {
        return this.className.filter(p => p.id !== id);
    }
}

