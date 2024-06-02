import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Package } from "./packages.model";
import { Car } from "./cars.model";

@Entity()
export class Policy {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Package, (pack) => pack.id)
  package: number;

  @OneToOne(() => Car)
  @JoinColumn()
  car: number;

}