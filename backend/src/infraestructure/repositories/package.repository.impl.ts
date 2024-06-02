import { Package } from "../../db/postgres/models";
import { PackageEntity } from "../../domain/entities/package.entity";
import { PackagesRepository } from "../../domain/repositories/packages.repository";

export class PackageRepositoryImpl implements PackagesRepository {
  async getAll(): Promise<PackageEntity[]> {
    const packages = await Package.find();

    const packagesEntities = packages.map(item => (
      new PackageEntity(
        item.id,
        item.name,
        item.price,
        item.description
      )
    ));

    return packagesEntities;
  }
  
  async getById(id: number): Promise<PackageEntity> {
    const packageDb = await Package.findOne({
      where: {
        id
      }
    });

    if (!packageDb) throw new Error('Paquete no encontrado');

    return new PackageEntity(packageDb.id, packageDb?.name, packageDb?.price, packageDb?.description);
  }
  
}