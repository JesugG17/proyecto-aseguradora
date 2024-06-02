import { Request, Response } from "express";
import { PackagesRepository } from "../../domain/repositories/packages.repository";

export class PackageController { 

  constructor(
    private readonly packageRepository: PackagesRepository
  ){}

  getAll = async(req: Request, res: Response) => {
    const packages = await this.packageRepository.getAll();

    res.json({ ok: true, data: packages });
  }

  getById = async(req: Request, res: Response) => {
    const packageId = +req.params.id;

    const packageDb = await this.packageRepository.getById(packageId);
    
    res.json({ ok: true, data: packageDb });
  }

}