import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  policy: number;

}