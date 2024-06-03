import { Request, Response } from "express";
import { PaymentRepository } from "../../domain/repositories/payment.repository";

export class PaymentController {

    constructor(
        private readonly paymentRepository: PaymentRepository
    ) { }

    createPayment = async (req: Request, res: Response) => {
        const { userId, policyId } = req.body
        await this.paymentRepository.createPayment(userId, policyId);

        res.json({ ok: true });
    }


}