import { DataSource as TypeormDataSource } from "typeorm";
import path from "node:path";

import {
  APP_MONGODB_PORT,
  APP_MONGODB_HOST,
  APP_MONGODB_NAME,
  APP_MONGODB_PASSWORD,
  APP_MONGODB_URL,
} from "@/astronautaking-api/constants";

const AppDataSource = new TypeormDataSource({
  type: "mongodb",
  host: APP_MONGODB_HOST,
  url: APP_MONGODB_URL,
  database: APP_MONGODB_NAME,
  password: APP_MONGODB_PASSWORD,
  port: APP_MONGODB_PORT,
  synchronize: true,
  logging: true,
  entities: [path.join(process.cwd(), "src", "/**/*.entity.{ts,js}")],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err: any) => {
    console.log(err);
  });

export const getDataSource = (delay = 3000): Promise<TypeormDataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};
