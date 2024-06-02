import { Entity, ManyToMany, ManyToOne } from "typeorm";
import { Service } from "./services.model";
import { Package } from "./packages.model";


@Entity()
export class ServicePackage {

  @ManyToOne(() => Service, (service) => service.id)
  service: number;

  @ManyToOne(() => Package, (pack) => pack.id)
  package: number;

}