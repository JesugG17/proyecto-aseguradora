import { UserEntity } from "./user.entity";

export class carEntity {
    constructor(
        public id: number,
        public model: string,
        public brand: string,
        public year: number,
        public user: UserEntity
    ) { }
}