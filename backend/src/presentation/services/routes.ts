import { Router } from "express";
import { ServicesRepositoryImpl } from "../../infraestructure/repositories/services.repository,impl";
import { ServiceController } from "./controller";


export class ServicesRoutes {

  static get routes(): Router {
    const router = Router();

    const packageRepositoryImpl = new ServicesRepositoryImpl();
    const packageController = new ServiceController(packageRepositoryImpl);

    router.get('/all', packageController.getAll);

    router.get('/:id', packageController.getByPackage);

    return router;
  }
}