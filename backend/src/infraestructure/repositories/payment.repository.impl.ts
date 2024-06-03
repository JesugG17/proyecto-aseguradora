import { Payment } from "../../db/postgres/models";
import { User } from "../../db/postgres/models";
import { Policy } from "../../db/postgres/models";
import { PaymentEntity } from "../../domain/entities/payment.entity";
import { PaymentRepository } from "../../domain/repositories/payment.repository";

export class PaymentRepositoryImpl implements PaymentRepository {
    async createPayment(userId: number, policyId: number): Promise<void> {
        const userPay = await User.findOneBy({ id: userId })
        const policyPay = await Policy.findOneBy({ id: policyId })
        const newPayment = new Payment()

        if (!userPay) {
            throw new Error("Usuario no encontrado")
        }
        if (!policyPay) {
            throw new Error("Poliza no encontrada")
        }
        newPayment.user = userPay.id
        newPayment.policy = policyPay.id

        newPayment.save()

    }
}