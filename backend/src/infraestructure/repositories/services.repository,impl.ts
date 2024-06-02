import { ServicePackageEntity } from "../../domain/entities/service-package.entity";
import { ServiceEntity } from "../../domain/entities/service.entity";
import { ServicesRepository } from "../../domain/repositories/services.repository";


export class ServicesRepositoryImpl implements ServicesRepository {
  getAll(): Promise<ServiceEntity> {
    throw new Error("Method not implemented.");
  }
  getByPackage(packageId: number): Promise<ServicePackageEntity> {
    throw new Error("Method not implemented.");
  }

}