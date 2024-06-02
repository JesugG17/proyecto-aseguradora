import { PackageEntity } from "./package.entity";
import { ServiceEntity } from "./service.entity";


export class ServicePackageEntity {
  constructor(
    public packageInfo: PackageEntity,
    public services: ServiceEntity[]
  ){}
}