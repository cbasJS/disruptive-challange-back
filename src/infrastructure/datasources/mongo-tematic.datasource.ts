import { TematicModel } from "../../data/mongo/models/tematic.model";
import { TematicDataSource } from "../../domain/datasources/tematic.datasource";
import { TematicEntity } from "../../domain/entities/tematic.entity";

export class MongoTematicDataSource implements TematicDataSource {
  async saveTematic(tematic: TematicEntity): Promise<void> {
    const newTematic = await TematicModel.create(tematic);
    console.log("Method not implemented", newTematic);
  }

  async getTematics(): Promise<TematicEntity[]> {
    const tematics = await TematicModel.find();

    return tematics.map(TematicEntity.fromObject);
  }
}
