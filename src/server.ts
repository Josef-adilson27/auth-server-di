import cookieParser from "cookie-parser";
import express, { Express, urlencoded } from "express";
import { injectable } from 'inversify';
import { route } from "./routes.js";

@injectable()
export class Server {

  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddleware();
  }
  
  private setupMiddleware(): void {
    this.app.use(route)
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(urlencoded({extended:false}));
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Сервер запущен на ${port} порту `);
    });

  }

  public getApp(): Express {
    return this.app;
  }
  
}
