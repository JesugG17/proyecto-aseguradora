import { Car, Policy } from "../../db/postgres/models";
import { CreateCardDto } from "../../domain/dtos/car/create-card.dto";
import { CarRepository } from "../../domain/repositories/car.repository";

export class CarRepositoryImpl implements CarRepository {
   async createCar(createCardDto: CreateCardDto): Promise<void> {
        const { id, brand, model, packageId, user, year } = createCardDto;
        const carInDB = await Car.findOneBy({id : id})
        if(carInDB) {
            throw new Error('EL AUTO YA EXISTE');
        }
        console.log({packageId});
        const newCar = new Car();
        newCar.id = id;
        newCar.model = model;
        newCar.brand = brand;
        newCar.year = year;
        newCar.user = user;
        const policy = new Policy();
        policy.car = id;
        policy.package = packageId;
        
        await policy.save();
        await newCar.save();
    }
}