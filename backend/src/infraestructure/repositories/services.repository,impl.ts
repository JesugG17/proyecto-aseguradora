import { In } from "typeorm";
import { Package, Service, ServicePackage } from "../../db/postgres/models";
import { ServicePackageEntity } from "../../domain/entities/service-package.entity";
import { ServiceEntity } from "../../domain/entities/service.entity";
import { ServicesRepository } from "../../domain/repositories/services.repository";
import { PackageEntity } from "../../domain/entities/package.entity";


export class ServicesRepositoryImpl implements ServicesRepository {
  async getAll(): Promise<ServiceEntity[]> {
    const servicesDb = await Service.find();

    const servicesEntities = servicesDb.map(service => (
      new ServiceEntity(
        service.id,
        service.name,
        service.description
      )
    ));

    return servicesEntities;
    
  }
  async getByPackage(packageId: number): Promise<ServicePackageEntity> {
    const servicePackages = await ServicePackage.find({
      where: {
        package: packageId
      }
    });
    const packageDb = await Package.findOne({
      where: {
        id: packageId
      }
    });
    if (!packageDb) throw new Error('Paquete no encontrado');

    const packageEntity = new PackageEntity(packageDb?.id, packageDb?.name, packageDb?.price, packageDb?.description);
    const servicesId = servicePackages.map(item => item.service);
    const services = await Service.find({
      where: {
        id: In(servicesId)
      }
    });
    const servicesEntities = services.map(service => (
      new ServiceEntity(
        service.id,
        service.name,
        service.description
      )
    ));

    return new ServicePackageEntity(packageEntity, servicesEntities);

  };


}