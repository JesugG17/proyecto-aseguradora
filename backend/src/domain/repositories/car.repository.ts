import { CreateCardDto } from "../dtos/car/create-card.dto";

export abstract class CarRepository {
    abstract createCar(createCardDto: CreateCardDto): Promise<void>;
}