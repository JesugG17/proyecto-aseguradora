import { ServicePackageEntity } from "../entities/service-package.entity";
import { ServiceEntity } from "../entities/service.entity";


export abstract class ServicesRepository {

  abstract getAll(): Promise<ServiceEntity>;

  abstract getByPackage(packageId: number): Promise<ServicePackageEntity>;

}