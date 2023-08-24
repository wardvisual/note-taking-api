import { Module } from "@/astronautaking-api/types";

import { UsersRoutes } from "./users/users.routes";

export const routes: Module[] = [
  {
    path: "users",
    route: UsersRoutes,
  },
];
