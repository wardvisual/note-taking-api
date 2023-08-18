import { User } from "../entities/user.entity";

export interface RegisterUser extends Omit<User, "id"> {}
