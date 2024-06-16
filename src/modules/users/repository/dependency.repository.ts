import { DATA_BASE_MAIN } from "src/core/constants";
import { IUserRepository } from "./iuser.repository";
import { MongoUserRepository } from "./mongo.user.repository";
import { PostgresUserRepository } from "./postgres.user.repository";
import { Injectable } from "@nestjs/common";
import { MockUserRepository } from "./mock.repository";

@Injectable()
export class UserRepository{
    constructor(
        private  postgresUserRepository: PostgresUserRepository
        , private  mongoUserRepository: MongoUserRepository
        , private  mockUserRepository: MockUserRepository
    ) { }
    getUserRepository(): IUserRepository {
        const ca: string = DATA_BASE_MAIN;
        switch (ca) {
            case "postgres":
                return this.postgresUserRepository;
            case "mocktest":
                return this.mockUserRepository;
            case "mongo":
                return this.mongoUserRepository;
            case "mySQL":
                return this.mongoUserRepository;
            default:
                throw new Error("Invalid Database type");
        }
    }
};