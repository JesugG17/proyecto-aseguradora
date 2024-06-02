import { Router } from "express";
import { ServicesRepositoryImpl } from "../../infraestructure/repositories/services.repository,impl";
import { ServiceController } from "./controller";


export class ServicesRoutes {

  static get routes(): Router {
    const router = Router();

    const serviceRepositoryImpl = new ServicesRepositoryImpl();
    const serviceController = new ServiceController(serviceRepositoryImpl);

    router.get('/all', serviceController.getAll);

    router.get('/get-by-package/:id', serviceController.getByPackage);

    return router;
  }
}