import { DataSource } from "typeorm";
import { User, Service, Car, Package, ServicePackage, Payment, Policy } from "./models";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "aseguradora",
  synchronize: true,
  // logging: true,
  entities: [User, Service, Car, Package, ServicePackage, Payment, Policy],
  subscribers: [],
  migrations: [],
  extra: {
    trustServerCertificate: true
  }
});

export type Database = typeof AppDataSource;