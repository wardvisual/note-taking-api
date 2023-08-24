import { UsersController } from "./users.controllers";
import { Router } from "express";

export const UsersRoutes = Router();

UsersRoutes.get("/", UsersController.getUsers);
