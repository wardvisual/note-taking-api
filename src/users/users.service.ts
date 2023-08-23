import { DataSource, dataSource } from "@/astronautaking-api/database";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";

export class UsersService {
  public static dataSource: typeof dataSource.dataSource;

  constructor() {
    UsersService.dataSource = dataSource.dataSource;
  }

  public static async registerUser(user: any) {
    // const response = await this.dataSource
    //   .getMongoRepository(User)
    //   .insertOne(user);

    console.log({ user });
  }
}

export const usersService = new UsersService();
