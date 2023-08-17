import { config } from "dotenv";

config();

interface Env {
  PORT: number;
}

const envs = process.env;

export const { PORT }: Env = {
  PORT: Number(envs.PORT),
};
