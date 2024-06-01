import express, { Application } from 'express';

export class Server {

  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application running in port ${this.port}`);
    })
  }

}
