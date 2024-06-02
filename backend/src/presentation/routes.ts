import { Router } from "express";
import { PackageRoutes } from "./package/routes";
import { ServicesRoutes } from "./services/routes";


export class AppRoutes {

    static get routes(): Router {
      const router = Router();

      router.use('/api/packages', PackageRoutes.routes);
      router.use('/api/services', ServicesRoutes.routes);

      return router;
    }

}