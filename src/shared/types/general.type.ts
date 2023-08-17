import { Context, NextFunction } from "rango";

type Middleware = (context: Context, next: NextFunction) => void;

type Method = Array<(context: Context) => any> | ((context: Context) => any);

interface Methods {
  GET?: Method;
  POST?: Method;
  PUT?: Method;
  DELETE?: Method;
}

export interface Module {
  path: string;
  methods?: Methods;
  children?: any[];
  middlewares?: [Middleware];
}

interface Route {
  [key: string]: Methods;
}

export interface Moduleable {
  path: string;
  routes: Route;
  children?: any[];
  middlewares?: [Middleware];
}
