import { UserModel } from "../../data/mongo/models/user.model";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entity";

export class MongoUserDatasource implements UserDataSource {
  async saveUser(user: UserEntity): Promise<void> {
    const newUser = await UserModel.create(user);
    console.log("Method not implemented", newUser);
  }

  async getUser(userName: string, mail: string): Promise<UserEntity[]> {
    const users = await UserModel.find({ userName, mail });

    return users.map(UserEntity.fromObject);
  }
}
