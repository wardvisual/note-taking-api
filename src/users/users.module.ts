import { Module, Moduleable } from "@/astronautaking-api/types";

import { UserController } from "./users.controllers";

// export const UsersModule: Moduleable = {
//   path: "users",
//   routes: {
//     "/": {
//       GET: UserController.getUsers,
//     },
//     ":id": {
//       GET: UserController.getUser,
//     },
//     "/login": {
//       POST: UserController.loginUser,
//     },
//     "/register": {
//       POST: UserController.registerUser,
//     },
//   },
// };

export const UsersModule: Module[] = [
  {
    path: "users",
    methods: {
      GET: UserController.getUsers,
    },
  },
  {
    path: "users/:userId",
    methods: {
      GET: UserController.getUser,
    },
  },
  {
    path: "users/register",
    methods: {
      POST: UserController.registerUser,
    },
  },
  {
    path: "users/login",
    methods: {
      POST: UserController.loginUser,
    },
  },
];
