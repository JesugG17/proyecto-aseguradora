import express, { Application, Router } from 'express';
import cors from 'cors';
import { AppDataSource } from './db/postgres/data-source';
import { seed } from './util/seed';

interface Options {
  port?: number;
  routes: Router;
}

export class Server {

  private readonly app: Application;
  private readonly routes: Router;
  private readonly port: number;

  constructor(options: Options) {
    const { port = 3000, routes } = options;
    this.app = express();
    this.port = port;
    this.routes = routes;

    this.startDatabase();

    this.middlewares();

    this.setupRoutes();

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

  private async setupRoutes() {
    this.app.use(this.routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application running in port ${this.port}`);
    })
  }

}
