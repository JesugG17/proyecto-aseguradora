import { PackageEntity } from "../entities/package.entity";

export abstract class PackagesRepository {

  abstract getAll(): Promise<PackageEntity>;

  abstract getById(id: number): Promise<PackageEntity>;

}