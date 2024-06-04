import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Car extends BaseEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  user: number;

}