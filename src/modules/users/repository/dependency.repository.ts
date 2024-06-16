import { DATA_BASE_MAIN } from "src/core/constants";
import { IUserRepository } from "./iuser.repository";
import { MongoUserRepository } from "./mongo.user.repository";
import { PostgresUserRepository } from "./postgres.user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository{
    constructor(  private  postgresUserRepository: PostgresUserRepository) { }
    getUserRepository(): IUserRepository {
        const ca: string = DATA_BASE_MAIN;
        switch (ca) {
            case "postgres":
                return this.postgresUserRepository;
            case "mongo":
                return new MongoUserRepository();
            case "mySQL":
                return new MongoUserRepository();
            default:
                throw new Error("Invalid Database type");
        }
    }
};