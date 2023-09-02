import express, { Application, Router } from "express";

import { Route } from "@/lib/types";

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

  public registerModules(routes: Route[]): void {
    routes.forEach((route: Route) => {
      this.server.use("/api/v1", this.route.use(`/${route.path}`, route.route));
    });
  }
}
