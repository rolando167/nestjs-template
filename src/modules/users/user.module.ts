import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/core/config/databases/database.module';
import { PostgresUserRepository } from './repository/postgres.user.repository';
import { UserRepository } from './repository/dependency.repository';
import { MongoUserRepository } from './repository/mongo.user.repository';
import { MockUserRepository } from './repository/mock.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService
        , PostgresUserRepository
        , UserRepository
        , MongoUserRepository
        , MockUserRepository
    ],
})

export class UserModule { }
