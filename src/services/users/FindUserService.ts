import { inject, injectable } from "tsyringe";
import User from "../../models/User";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class FindUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  
  public async execute(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findByID(id);

    if (!user) {
      throw new Error("Este usuário não existe.");
    }

    return user;
  }
}