import { Module, Moduleable } from "@/astronautaking-api/types";

import rango, { Context } from "rango";
import { RangoApp } from "rango/lib/app";

export class App {
  private readonly server: RangoApp;

  constructor() {
    this.server = rango();
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

  public registerModules(modules: Module[]): void {
    let _modules: any = [];

    modules.forEach(
      async ({ methods, ...rangoAtributes }) =>
        await _modules.push({ ...rangoAtributes, ...methods })
    );

    this.server.add(_modules);
  }
}
