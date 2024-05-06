export enum TypeOfUser {
  admin = "admin",
  creator = "creator",
  reader = "reader",
}

export interface UserEntityOptions {
  _id: string;
  typeOfUser: TypeOfUser;
  mail: string;
  userName: string;
  createdAt?: Date;
}

export class UserEntity {
  public _id: string;
  public typeOfUser: TypeOfUser; // Enum
  public mail: string;
  public userName: string;
  public createdAt?: Date;

  constructor(options: UserEntityOptions) {
    const { typeOfUser, mail, userName, createdAt = new Date(), _id } = options;
    this.typeOfUser = typeOfUser;
    this.mail = mail;
    this.userName = userName;
    this.createdAt = createdAt;
    this._id = _id;
  }

  static fromObject = (object: { [key: string]: any }): UserEntity => {
    const { typeOfUser, mail, userName, createdAt, _id } = object;
    const user = new UserEntity({
      _id,
      typeOfUser,
      mail,
      userName,
      createdAt,
    });

    return user;
  };
}
