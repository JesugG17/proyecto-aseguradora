import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.model";
import { Policy } from "./policy.model";

@Entity()
export class Payment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  policy: number;

}