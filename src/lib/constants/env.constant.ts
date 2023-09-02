import { config } from "dotenv";

config();

interface Env {
  APP_PORT: number;
  APP_MONGODB_URL: string;
  APP_MONGODB_HOST: string;
  APP_MONGODB_PORT: number;
  APP_MONGODB_NAME: string;
  APP_MONGODB_PASSWORD: string;
}

const envs = process.env;

export const {
  APP_PORT,
  APP_MONGODB_HOST,
  APP_MONGODB_PORT,
  APP_MONGODB_NAME,
  APP_MONGODB_PASSWORD,
  APP_MONGODB_URL,
}: Env = {
  APP_PORT: Number(envs.APP_PORT),
  APP_MONGODB_HOST: envs.APP_MONGODB_HOST,
  APP_MONGODB_URL: envs.APP_MONGODB_URL,
  APP_MONGODB_PORT: Number(envs.APP_MONGODB_PORT),
  APP_MONGODB_NAME: envs.APP_MONGODB_NAME,
  APP_MONGODB_PASSWORD: envs.APP_MONGODB_PASSWORD,
};
