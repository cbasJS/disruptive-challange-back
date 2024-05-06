import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repository/user.repository";

export class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly userDatasource: UserDataSource //<---
  ) {}

  async saveUser(user: UserEntity): Promise<void> {
    return this.userDatasource.saveUser(user);
  }

  async getUser(userName: string, mail: string): Promise<UserEntity[]> {
    return this.userDatasource.getUser(userName, mail);
  }
}
