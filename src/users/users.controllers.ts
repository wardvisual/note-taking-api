import { Context } from "rango";

export class UserController {
  static getUsers(context: Context) {
    return "hello users";
  }
  static getUser(context: Context) {
    return "hello user";
  }
  static registerUser(context: Context) {
    return context.body;
  }
  static loginUser(context: Context) {
    return context.body;
  }
}
