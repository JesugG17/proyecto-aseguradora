import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Package } from "./packages.model";
import { Car } from "./cars.model";

@Entity()
export class Policy extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  package: number;

  @Column()
  car: number;

}