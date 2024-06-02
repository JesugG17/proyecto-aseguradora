import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./users.model";

@Entity()
export class Car {

  @PrimaryColumn()
  id: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

}