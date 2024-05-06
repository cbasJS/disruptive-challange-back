import { TematicEntity } from "../entities/tematic.entity";

export abstract class TematicDataSource {
  abstract saveTematic(tematic: TematicEntity): Promise<void>;
  abstract getTematics(): Promise<TematicEntity[]>;
}
