import { User } from "../entities/user.entity";

export interface LoginUser
  extends Omit<User, "id" | "firstName" | "lastName"> {}
