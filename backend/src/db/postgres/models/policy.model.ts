import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Policy extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  package: number;

  @Column()
  car: number;

}