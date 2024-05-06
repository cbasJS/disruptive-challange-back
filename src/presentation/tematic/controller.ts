import { Request, Response } from "express";
import { TematicRepositoryImpl } from "../../infrastructure/repositories/tematic.repository.impl";
import { MongoTematicDataSource } from "../../infrastructure/datasources/mongo-tematic.datasource";
import { TematicModel } from "../../data/mongo";

export class TematicController {
  //* DI
  constructor() {}

  public getTematics = async (req: Request, res: Response) => {
    try {
      const tematicRepository = new TematicRepositoryImpl(
        new MongoTematicDataSource()
      );
      const tematics = await tematicRepository.getTematics();
      return res.json({
        status: "ok",
        message: "",
        data: tematics,
      });
    } catch (e: any) {
      return res.status(500).json(e);
    }
  };

  public createTematic = async (req: Request, res: Response) => {
    const {
      name,
      thumbnailImage,
      allowVideo,
      allowImage,
      allowText,
      createdInfo,
    } = req.body;

    if (name && thumbnailImage && createdInfo) {
      const tematicRepository = new TematicRepositoryImpl(
        new MongoTematicDataSource()
      );
      try {
        const newTematic = await TematicModel.create({
          name,
          thumbnailImage,
          allowVideo,
          allowImage,
          allowText,
          createdInfo,
        });
        return res.json({ status: "ok", message: "", data: newTematic });
      } catch (e: any) {
        if (e._message && e._message === "Tematic validation failed") {
          return res
            .status(400)
            .json({ error: "El nombre de la tematica ya existe!" });
        }

        console.log(e);
        return res.status(500).json(e);
      }
    } else {
      return res.json({
        status: "ok",
        message:
          "El nombre, la imagen miniatura y los datos del usuario son requeridos",
        data: null,
      });
    }
  };
}
