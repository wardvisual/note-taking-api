import { usersController } from "./users.controllers";
import { Router } from "express";

export const UsersRoutes: Router = Router();

UsersRoutes.post("/login", usersController.login);
UsersRoutes.post("/register", usersController.register);
