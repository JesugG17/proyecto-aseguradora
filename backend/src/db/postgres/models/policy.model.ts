import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Unique(["car"])
@Entity()
export class Policy extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  package: number;

  @Column()
  car: string;

}