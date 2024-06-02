import { PackageEntity } from "../../domain/entities/package.entity";
import { PackagesRepository } from "../../domain/repositories/packages.repository";

export class PackageRepositoryImpl implements PackagesRepository {
  getAll(): Promise<PackageEntity> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<PackageEntity> {
    throw new Error("Method not implemented.");
  }
  
}