import { Request, Response } from "express";
import { CarRepository } from "../../domain/repositories/car.repository";
import { CreateCardDto } from "../../domain/dtos/car/create-card.dto";

export class CarController { 

  constructor(
    private readonly carRepository: CarRepository
  ){}

  createCar = async(req: Request, res: Response) => {
    const body = req.body as CreateCardDto;
    console.log({ body });
    await this.carRepository.createCar(body);
    
    res.json({ ok: true });
  }

}