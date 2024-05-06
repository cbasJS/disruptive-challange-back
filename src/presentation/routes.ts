import { Router } from "express";
import { UserRoutes } from "./user/routes";
import { TematicRoutes } from "./tematic/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/user", UserRoutes.routes);
    router.use("/api/tematic", TematicRoutes.routes);

    return router;
  }
}
