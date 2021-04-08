import { inject, injectable } from "tsyringe";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  public async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findByID(id);

    if (!user) {
      throw new Error("Este usuário não existe");
    }

    await this.usersRepository.delete(id);
  }
}