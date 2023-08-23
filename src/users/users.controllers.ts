import { Context } from "rango";
import { UsersService, usersService } from "./users.service";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";

export class UsersController {
  static usersService: typeof usersService;

  static getUsers(context: Context) {
    return "hello users";
  }

  static getUser(context: Context) {
    return "hello user";
  }

  public static async registerUser(context: Context) {
    // const user = await UsersService.registerUser(context.body as RegisterUser);

    return "registerUser method";
  }

  static loginUser(context: Context) {
    return context.body;
  }
}
