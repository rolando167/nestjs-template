import { AuthModule } from "../auth/auth.module";
import { UserModule } from "./users/user.module";

export const modulesRoutes = [
    {
        path: 'auth',
        module: AuthModule
    },
    {
        path: 'users',
        module: UserModule
    }
];