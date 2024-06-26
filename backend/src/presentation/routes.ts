import { Router } from "express";
import { PackageRoutes } from "./package/routes";
import { ServicesRoutes } from "./services/routes";
import { PaymentRoutes } from "./payments/routes";
import { CarRoutes } from "./car/routes";


export class AppRoutes {

  static get routes(): Router {
    const router = Router();

    router.use('/api/packages', PackageRoutes.routes);
    router.use('/api/services', ServicesRoutes.routes);
    router.use('/api/payments', PaymentRoutes.routes);
    router.use('/api/car', CarRoutes.routes);
    return router;
  }

}