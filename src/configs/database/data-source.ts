import { DataSource as TypeormDataSource } from "typeorm";

import {
  APP_MONGODB_PORT,
  APP_MONGODB_HOST,
  APP_MONGODB_NAME,
} from "@/astronautaking-api/constants";

export class DataSource {
  public dataSource: TypeormDataSource;

  constructor() {
    this.dataSource = new TypeormDataSource({
      type: "mongodb",
      host: APP_MONGODB_HOST,
      port: APP_MONGODB_PORT,
      database: APP_MONGODB_NAME,
    });
  }
}

export const dataSource = new DataSource();
