import { inject, injectable } from "tsyringe";
import Finance from "../../models/Finance";
import IFinancesRepository from "../../repositories/interfaces/IFinancesRepository";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class CreateFinanceService {
  constructor(
    @inject("FinancesRepository")
    private financesRepository: IFinancesRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(user_id: string): Promise<Finance[] | undefined> {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) {
      throw new Error("This user doesn't exist.");
    }

    const finances = await this.financesRepository.findByUserID(user_id);

    return finances;
  }
}
