import { Module } from "@/astronautaking-api/types";

import { UsersController } from "./users.controllers";
import { UsersService } from "./users.service";
import { Router } from "express";

const UsersRoutes = Router();

UsersRoutes.get("/", (req, res) => {
  res.json("ward");
});

export { UsersRoutes };
