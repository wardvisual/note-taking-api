import { UsersController } from "./users.controllers";
import { Router } from "express";

export const UsersRoutes = Router();

const usersController = new UsersController();

UsersRoutes.get("/", usersController.getUsers);
UsersRoutes.post("/", usersController.registerUser);
