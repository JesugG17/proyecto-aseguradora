export abstract class CarRepository {
    abstract createCar(id:string, model: string, brand: string, year: number, user: number): Promise<void>;
}