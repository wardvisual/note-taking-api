import { getDataSource } from "@/astronautaking-api/database";
import { User } from "./entities/user.entity";
import { RegisterUser } from "./dto/register-user.dto";
import { Repository } from "typeorm";
import { LoginUser } from "./dto/login-user.dto";
import { PasswordService } from "@/astronautaking-api/services";
import { APIResponse } from "@/astronautaking-api/types";

export class UsersService {
  private userRepositoryPromise: Promise<Repository<User>>;
  private passwordService: PasswordService;

  constructor() {
    this.userRepositoryPromise = getDataSource().then((dataSource) =>
      dataSource.getRepository(User)
    );

    this.passwordService = new PasswordService();
  }

  public async register(user: RegisterUser): Promise<APIResponse> {
    const userRepository = await this.userRepositoryPromise;

    const userFromDB = await userRepository.findOne({
      where: { username: user.username },
    });

    if (userFromDB)
      return {
        isSuccess: false,
        message: "User already exists",
      } satisfies APIResponse;

    const hashedPassword = this.passwordService.encrypt(user.password);

    user.password = hashedPassword;

    await userRepository.save(user);

    const response = {
      isSuccess: true,
      message: "User created",
    } satisfies APIResponse;

    return response;
  }

  public async login(user: LoginUser): Promise<APIResponse> {
    const userRepository = await this.userRepositoryPromise;

    const userFromDB = await userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (!userFromDB)
      return {
        isSuccess: false,
        message: "User not found",
      } satisfies APIResponse;

    if (!this.passwordService.decrypt(user.password, userFromDB.password))
      return {
        isSuccess: false,
        message: "Invalid password",
      } satisfies APIResponse;

    const { password, ...userWithoutPasword } = userFromDB;

    const response = {
      isSuccess: true,
      message: "Login successful",
      data: {
        token: userFromDB.id,
        user: userWithoutPasword,
      },
    } satisfies APIResponse;

    return response;
  }
}

export const usersService = new UsersService();
