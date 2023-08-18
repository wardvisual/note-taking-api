import { Context } from "rango";
import { UsersService, usersService } from './users.service';

export class UsersController {
  public service: UsersService
  
  constructor() { 
    this.service = usersService.
   }
  
  static getUsers(context: Context) {
    return "hello users";
  }

  static getUser(context: Context) {
    return "hello user";
  }

  static registerUser(context: Context) {
    this.service.
    return context.body;
  }

  static loginUser(context: Context) {
    return context.body;
  }
}
