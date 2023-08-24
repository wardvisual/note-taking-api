import { UsersService, usersService } from "./users.service";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";

export class UsersController {
  static usersService: typeof usersService;

  static getUsers(req: any, res: any) {
    console.log("hey");
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
