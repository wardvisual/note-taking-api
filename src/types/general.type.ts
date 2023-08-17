import { Context, NextFunction } from "rango";

type Middleware = (context: Context, next: NextFunction) => void;

export interface Module {
  path: string;
  GET?: (context: Context) => any;
  POST?: (context: Context) => any;
  PUT?: (context: Context) => any;
  DELET?: (context: Context) => any;
  children?: any[];
  middlewares?: [Middleware];
}

export const ModuleFactory = (module: Module) => {
  return module;
};
