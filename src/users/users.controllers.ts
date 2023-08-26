import { UsersService, usersService } from "./users.service";
import { RegisterUser } from "./dto/register-user.dto";

import { Request, Response } from "express";
import { User } from "./entities/user.entity";

export class UsersController {
  async getUsers(req: Request, res: Response): Promise<void> {
    const user: User | User[] = await usersService.getUsers();

    res.json({ user });
  }

  async registerUser(req: Request, res: Response): Promise<void> {
    const user: RegisterUser = await usersService.registerUser(
      req.body as RegisterUser
    );

    res.json({ user });
  }

  loginUser() {}
}
