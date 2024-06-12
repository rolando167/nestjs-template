import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    className = [{
        id: '1',
        name: 'A SPA app',
    },
    {
        id: '2',
        name: 'A Nest API',
    }];

    getAll(): any[] {
        return this.className;
    }

    getById(id: string): any {
        return this.getAll().filter(p => p.id === id);
    }

    create(user: any): any {
        console.log(user.title);
        
        return `This action returns a    📄 2024`;
    }

    update(id:string, user: any): any {
        return `This action returns a    📄 2024`;
    }

    delete(id: string): any {
        this.className = this.className.filter(p => p.id !== id);
    }
}

