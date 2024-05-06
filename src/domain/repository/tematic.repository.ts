import { TematicEntity } from "../entities/tematic.entity";

export abstract class TematicRepository {
  abstract saveTematic(user: TematicEntity): Promise<void>;
  abstract getTematics(): Promise<TematicEntity[]>;
}
