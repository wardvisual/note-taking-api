import { UsersService, usersService } from "./users.service";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";

import { Request, Response } from "express";

export class UsersController {
  static usersService: typeof usersService;

  static getUsers(req: Request, res: Response) {
    res.json("UsersService.getUsers()");
  }

  static getUser() {
    return "hello user";
  }

  public static async registerUser() {
    // const user = await UsersService.registerUser(.body as RegisterUser);

    return "registerUser method";
  }

  static loginUser() {}
}
