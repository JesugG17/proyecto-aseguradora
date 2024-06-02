import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from './db/postgres/data-source';
import { seed } from './util/seed';

export class Server {

  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.startDatabase();

    this.middlewares();

  }

  private async startDatabase() {
    try {
      await AppDataSource.initialize();
      await seed();
      console.log('Database connected');
    } catch (error) {
      console.log(error);
      console.log('Something went wront trying to connect to database');
    }
  }

  private async middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application running in port ${this.port}`);
    })
  }

}
