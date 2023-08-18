import { DataSource, dataSource } from "@/astronautaking-api/database";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";

export class UsersService {
  public dataSource: DataSource;

  constructor() {
    this.dataSource = dataSource;
  }

  public async registerUser(user: RegisterUser) {
    const response = await this.dataSource.dataSource
      .getMongoRepository(User)
      .insertOne(user);

    console.log({ response });
  }
}
