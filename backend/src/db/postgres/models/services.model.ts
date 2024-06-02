import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}