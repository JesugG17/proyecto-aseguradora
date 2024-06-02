import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Package {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;
  
}