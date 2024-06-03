
export abstract class PaymentRepository {

    abstract createPayment(userId: number, policyId: number): Promise<void>;

}