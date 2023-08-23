import { Module, Moduleable } from "@/astronautaking-api/types";

import { UsersController } from "./users.controllers";
import { UsersService } from "./users.service";
import { Context } from "rango";

export const UsersModule: Module[] = [
  {
    path: "users",
    methods: {
      GET: UsersController.getUsers,
    },
  },
  {
    path: "users/:userId",
    methods: {
      GET: UsersController.getUser,
    },
  },
  {
    path: "users/register",
    methods: {
      POST: UsersController.registerUser,
    },
  },
  {
    path: "users/login",
    methods: {
      POST: UsersController.loginUser,
    },
  },
];
