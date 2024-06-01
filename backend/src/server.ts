import express, { Application } from 'express';
import { AppDataSource } from './db/postgres/data-source';

export class Server {

  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.startDatabase();
  }

  private async startDatabase() {
    try {
      await AppDataSource.initialize();
      console.log('Dabase connected');
    } catch (error) {
      console.log(error);
      console.log('Something went wront trying to connect to database');
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application running in port ${this.port}`);
    })
  }

}
