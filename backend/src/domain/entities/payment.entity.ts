import { PolicyEntity } from "./policy.entity";
import { UserEntity } from "./user.entity";

export class PaymentEntity {
    constructor(
        public id: number,
        public user: UserEntity,
        public policy: PolicyEntity,
    ) { }
}