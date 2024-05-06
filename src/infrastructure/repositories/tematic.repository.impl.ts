import { TematicDataSource } from "../../domain/datasources/tematic.datasource";
import { TematicEntity } from "../../domain/entities/tematic.entity";
import { TematicRepository } from "../../domain/repository/tematic.repository";

export class TematicRepositoryImpl implements TematicRepository {
  constructor(
    private readonly tematicDatasource: TematicDataSource //<---
  ) {}

  async saveTematic(tematic: TematicEntity): Promise<void> {
    return this.tematicDatasource.saveTematic(tematic);
  }

  async getTematics(): Promise<TematicEntity[]> {
    return this.tematicDatasource.getTematics();
  }
}
