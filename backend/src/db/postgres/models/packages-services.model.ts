import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ServicePackage extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  service: number;

  @Column()
  package: number;

}