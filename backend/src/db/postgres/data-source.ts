import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "aseguradora",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
  extra: {
    trustServerCertificate: true
  }
});