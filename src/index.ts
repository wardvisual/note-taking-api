import { App } from "./app.bootstrap";
import cors from "cors";
import bodyParser from "body-parser";

import { Module } from "./types";

const Modules: Module[] = [];

const Middlewares = [
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

/**
 * Initializes the application by creating a new instance of the App class and setting up the necessary configurations.
 *
 * @return {void} This function does not return a value.
 */
const init = (): void => {
  try {
    const app = new App();

    app.setGlobalMiddlewares(Middlewares);

    app.registerModule(Modules);

    app.startApp();
  } catch (error) {
    process.exit(1);
  }
};

init();
