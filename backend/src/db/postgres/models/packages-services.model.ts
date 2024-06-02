import { BaseEntity, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./services.model";
import { Package } from "./packages.model";


@Entity()
export class ServicePackage extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Service, (service) => service.id)
  service: number;

  @ManyToOne(() => Package, (pack) => pack.id)
  package: number;

}