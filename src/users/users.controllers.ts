import { usersService } from "./users.service";
import { RegisterUser } from "./dto/register-user.dto";

import { Request, Response } from "express";

export class UsersController {
  getUsers(req: Request, res: Response) {
    res.json("UsersService.getUsers()");
  }

  getUser() {
    return "hello user";
  }

  async registerUser(req: Request, res: Response) {
    const user: RegisterUser = await usersService.registerUser(
      req.body as RegisterUser
    );

    res.json({ user });
  }

  loginUser() {}
}
