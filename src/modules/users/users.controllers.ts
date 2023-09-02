import { Request, Response } from "express";

import { RegisterUser } from "./dto/register-user.dto";
import { LoginUser } from "./dto/login-user.dto";
import { usersService } from "./users.service";
import { APIResponse } from "@/lib/types";

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
