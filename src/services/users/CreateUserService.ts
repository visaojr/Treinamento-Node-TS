import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "../../models/User";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(data: ICreateUserDTO): Promise<User> {
    const verifyEmail = await this.usersRepository.findByEmail(data.email);

    if (verifyEmail) {
      throw new Error("This email is already being used");
    }

    const user = await this.usersRepository.create(data);

    return user;
  }
}
