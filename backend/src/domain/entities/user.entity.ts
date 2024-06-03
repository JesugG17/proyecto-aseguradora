export class UserEntity {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
    ) { }
}