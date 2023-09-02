import "reflect-metadata";

import cors from "cors";
import bodyParser from "body-parser";

import { APP_PORT } from "@/lib/constants";
import { App } from "@/app.bootstrap";
import { routes } from "@/app.routes";

const init = (): void => {
  try {
    const app = new App();

    app.setGlobalMiddlewares([
      cors({
        credentials: true,
      }),
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
    ]);

    app.registerModules(routes);

    app.listen(APP_PORT);
  } catch (error) {
    console.log({ API_ERROR: error });
    process.exit(1);
  }
};

init();
