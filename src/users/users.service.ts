import { getDataSource } from "@/astronautaking-api/database";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";
import { Repository } from "typeorm";

export class UsersService {
  private userRepositoryPromise: Promise<Repository<User>>;

  constructor() {
    this.userRepositoryPromise = getDataSource().then((dataSource) =>
      dataSource.getRepository(User)
    );
  }

  public async registerUser(user: RegisterUser) {
    const userRepository = await this.userRepositoryPromise;
    const response = await userRepository.save(user);

    return response;
  }
}

export const usersService = new UsersService();
