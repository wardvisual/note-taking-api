import { DataSource as TypeormDataSource } from "typeorm";
import path from "node:path";

import {
  APP_MONGODB_PORT,
  APP_MONGODB_HOST,
  APP_MONGODB_NAME,
  APP_MONGODB_PASSWORD,
  APP_MONGODB_URL,
} from "@/astronautaking-api/constants";

const appDataSource = new TypeormDataSource({
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

const initializeDataSource = async () => {
  try {
    await appDataSource.initialize();
    console.log("DB Connected!");
  } catch (err) {
    console.log("Failed to initialize the data source:", err);
    // Perform additional error handling or logging here
  }
};

export const getDataSource = async (
  delay = 3000
): Promise<TypeormDataSource> => {
  if (appDataSource.isInitialized) {
    return appDataSource;
  }

  //@ts-ignore
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (appDataSource.isInitialized) {
        resolve(appDataSource);
      } else {
        reject(new Error("Failed to create connection with database"));
      }
    }, delay);
  }).catch((err) => {
    console.log("Failed to get the data source:", err);
    throw err;
  });
};

initializeDataSource();
