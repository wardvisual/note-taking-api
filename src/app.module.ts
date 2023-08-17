import { Module } from "@/astronautaking-api/types";

import { UsersModule } from "./users/users.module";

export const modules: Module[] = [...UsersModule];
