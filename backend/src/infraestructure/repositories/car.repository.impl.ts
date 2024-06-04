import { Car } from "../../db/postgres/models";
import { CarRepository } from "../../domain/repositories/car.repository";

export class CarRepositoryImpl implements CarRepository {
   async createCar(id:string, model: string, brand: string, year: number, user: number): Promise<void> {
        const carInDB = await Car.findOneBy({id : id})
        if(carInDB) {
            throw new Error('EL AUTO YA EXISTE');
        }
        const newCar = new Car();
        newCar.id = id;
        newCar.model = model;
        newCar.brand = brand;
        newCar.year = year;
        newCar.user = user;
        newCar.save();
    }
}