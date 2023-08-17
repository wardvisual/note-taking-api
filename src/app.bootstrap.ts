import { PORT } from "~/constants";
import { Module } from "~/types";

import rango, { Context } from "rango";
import { RangoApp } from "rango/lib/app";

export class App {
  private readonly server: RangoApp;

  constructor() {
    this.server = rango();
  }

  public startApp() {
    this.server.listen(PORT, () =>
      console.log(`Your app is running at http://localhost:${PORT}`)
    );
  }

  public setGlobalMiddlewares(middlewares: any): void {
    for (const middleware of middlewares) {
      this.server.use(middleware);
    }
  }

  public registerModule(modules: Module[]): void {
    for (const module of modules) {
      this.server.add(module);
    }
  }
}
