import { Request, Response } from "express";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { MongoUserDatasource } from "../../infrastructure/datasources/mongo-user.datasource";
import { UserModel } from "../../data/mongo";
import { ok } from "assert";

export class UserController {
  //* DI
  constructor() {}

  public getUser = async (req: Request, res: Response) => {
    const userName = req.query.userName as string | undefined;
    const mail = req.query.mail as string | undefined;

    if (userName && mail) {
      const userRepository = new UserRepositoryImpl(new MongoUserDatasource());
      const user = await userRepository.getUser(userName, mail);
      if (user.length) {
        return res.json({
          status: "ok",
          message: "",
          data: user[0],
        });
      } else {
        return res.json({
          status: "ok",
          message: "No se encontró ningun usuario",
          data: null,
        });
      }
    } else {
      return res
        .status(404)
        .json({ error: "Usuario y correcto electronico son requeridos" });
    }
  };

  public createUser = async (req: Request, res: Response) => {
    const { mail, userName, typeOfUser } = req.body;

    if (!mail) {
      return res
        .status(400)
        .json({ error: "El correo electronico es requerido" });
    } else if (!userName) {
      return res.status(400).json({ error: "El usuario es requerido" });
    } else if (!typeOfUser) {
      return res.status(400).json({ error: "El tipo de usuario es requerido" });
    }
    if (mail && userName && typeOfUser) {
      try {
        const newUser = await UserModel.create({
          mail,
          userName,
          typeOfUser,
        });

        return res.json({ status: "ok", message: "", data: newUser });
      } catch (e: any) {
        if (e._message && e._message === "User validation failed") {
          return res
            .status(400)
            .json({ error: "El usuario o correo ya existe!" });
        }

        console.log(e);
        return res.status(500).json(e);
      }
    }
  };
}
