import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./services.model";
import { Package } from "./packages.model";


@Entity()
export class ServicePackage extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  service: number;

  @Column()
  package: number;

}