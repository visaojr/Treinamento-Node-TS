import { inject, injectable } from "tsyringe";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "../../models/User";

@injectable()
export default class UpdateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(user_id: string, data: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) {
      throw new Error("EThis user doesn't exist.");
    }

    const userWithSameEmail = await this.usersRepository.findByEmail(data.email);

    if(userWithSameEmail) {
        throw new Error("This email is already being used");
    }

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    await this.usersRepository.update(user);

    return user;
  }
}
