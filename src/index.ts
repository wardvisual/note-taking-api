import "reflect-metadata";

import { App } from "./app.bootstrap";
import cors from "cors";
import bodyParser from "body-parser";

import { APP_PORT } from "@/astronautaking-api/constants";

import { modules } from "./app.module";

const init = (): void => {
  try {
    const app = new App();

    app.setGlobalMiddlewares([
      cors(),
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
    ]);

    app.registerModules(modules);

    app.listen(APP_PORT);
  } catch (error) {
    process.exit(1);
  }
};

init();
