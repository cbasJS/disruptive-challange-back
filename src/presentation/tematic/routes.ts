import { Router } from "express";
import { TematicController } from "./controller";

export class TematicRoutes {
  static get routes(): Router {
    const router = Router();
    const tematicController = new TematicController();

    router.get("/", tematicController.getTematics);
    router.post("/", tematicController.createTematic);

    return router;
  }
}
