import { APIResponse } from "@/astronautaking-api/types";

import { usersService } from "./users.service";
import { RegisterUser } from "./dto/register-user.dto";
import { Request, Response } from "express";
import { LoginUser } from "./dto/login-user.dto";

export class UsersController {
  async login(req: Request, res: Response): Promise<void> {
    const response = await usersService.login(req.body as LoginUser);

    res.json(response);
  }

  async register(req: Request, res: Response): Promise<void> {
    const response: APIResponse = await usersService.register(
      req.body as RegisterUser
    );

    res.json(response);
  }

  loginUser() {}
}

export const usersController: UsersController = new UsersController();
