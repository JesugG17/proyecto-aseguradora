import { Request, Response } from "express";
import { ServicesRepository } from "../../domain/repositories/services.repository";

export class ServiceController { 

  constructor(
    private readonly serviceRepository: ServicesRepository
  ){}

  getAll = async(req: Request, res: Response) => {
    const services = await this.serviceRepository.getAll();

    res.json({ ok: true, data: services });
  }

  getByPackage = async(req: Request, res: Response) => {
    const packageId = +req.params.id;

    const servicesDb = await this.serviceRepository.getByPackage(packageId);
    
    res.json({ ok: true, data: servicesDb });
  }

}