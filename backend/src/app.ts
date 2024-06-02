import { AppRoutes } from "./presentation/routes";
import { Server } from "./server";

new Server({
  routes: AppRoutes.routes
}).listen();