import express from 'express';

export class Server {

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
