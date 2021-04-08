import { inject, injectable } from "tsyringe";
import User from "../../models/User";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class FindAllUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.index();

    return users;
  }
}