import { UserEntity } from "../entities/user.entity";

export abstract class UserDataSource {
  abstract saveUser(user: UserEntity): Promise<void>;
  abstract getUser(userName: string, mail: string): Promise<UserEntity[]>;
}
