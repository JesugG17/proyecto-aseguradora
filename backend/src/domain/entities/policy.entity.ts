import { carEntity } from "./car.entity";
import { PackageEntity } from "./package.entity";

export class PolicyEntity {
    constructor(
        public id: number,
        public packageInfo: PackageEntity[],
        public car: carEntity,
    ) { }
}