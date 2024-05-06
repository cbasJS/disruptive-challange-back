import { envs } from "./config/plugins/envs.plugins";
import { MongoDB } from "./data/mongo";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  await MongoDB.connect({
    mongoURL: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}
