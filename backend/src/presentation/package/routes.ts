import { Router } from "express";
import { PackageRepositoryImpl } from "../../infraestructure/repositories/package.repository.impl";
import { PackageController } from "./controller";


export class PackageRoutes {

  static get routes(): Router {
    const router = Router();

    const packageRepositoryImpl = new PackageRepositoryImpl();
    const packageController = new PackageController(packageRepositoryImpl);

    router.get('/all', packageController.getAll);

    router.get('/:id', packageController.getById);

    return router;
  }
}