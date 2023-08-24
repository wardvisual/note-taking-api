import { Module } from "@/astronautaking-api/types";

import express, { Application, Router } from "express";

export class App {
  private readonly server: Application;
  private readonly route: Router;

  constructor() {
    this.server = express();
    this.route = express.Router();
  }

  public listen(port: number) {
    this.server.listen(port, () =>
      console.log(`Your app is running at http://localhost:${port}`)
    );
  }

  public setGlobalMiddlewares(middlewares: any): void {
    for (const middleware of middlewares) {
      this.server.use(middleware);
    }
  }

  public registerModules(routes: Module[]): void {
    routes.forEach((route: Module) => {
      this.server.use("/api/v1", this.route.use(`/${route.path}`, route.route));
    });
  }
}
