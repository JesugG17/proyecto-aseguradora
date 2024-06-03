import { Router } from "express";
import { PaymentRepositoryImpl } from "../../infraestructure/repositories/payment.repository.impl";
import { PaymentController } from "./controller";

export class PaymentRoutes {
    static get routes(): Router {
        const router = Router();
        const paymentRepositoryImpl = new PaymentRepositoryImpl();
        const paymentController = new PaymentController(paymentRepositoryImpl);

        router.post("/create-payment", paymentController.createPayment);

        return router;
    }
}
