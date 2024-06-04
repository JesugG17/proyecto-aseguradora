import { Request, Response } from "express";
import { CarRepository } from "../../domain/repositories/car.repository";

export class CarController { 

  constructor(
    private readonly carRepository: CarRepository
  ){}

  createCar = async(req: Request, res: Response) => {
    const { id ,model, brand, year, user } = req.body;
    
    await this.carRepository.createCar(id,model, brand, year, user);
    
    res.json({ ok: true });
  }

}