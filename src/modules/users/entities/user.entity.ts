export class User {
    id: number;
    name: string;
    last_name: string;
    full_name: string;
    email: string;
    remember_token: string;
    title: string;
    description: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    created_by: number;
    updated_by: number;
    state: 'OPEN' | 'DONE';
    status: boolean;
    photo: string;
    last_sign_at: Date;
}