import { Router } from "express";
import { CarRepositoryImpl } from "../../infraestructure/repositories/car.repository.impl";
import { CarController } from "./controller";

export class CarRoutes {
    static get routes() {
        const router = Router();
        const carRepositoryImpl = new CarRepositoryImpl();
        const carController = new CarController(carRepositoryImpl);

        router.post('/create-car', carController.createCar);
        
        return router;
    }
}