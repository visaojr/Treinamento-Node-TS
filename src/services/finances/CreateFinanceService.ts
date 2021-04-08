import { inject, injectable } from "tsyringe";
import IFinancesRepository from '../../repositories/interfaces/IFinancesRepository';
import ICreateFinanceDTO from '../../dtos/ICreateFinanceDTO';
import Finance from '../../models/Finance';
import IUsersRepository from '../../repositories/interfaces/IUsersRepository';

@injectable()
export default class CreateFinanceService {
    constructor(
        @inject("FinancesRepository")
        private financesRepository: IFinancesRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    public async execute(data: ICreateFinanceDTO): Promise<Finance> {        
        const user = await this.usersRepository.findByID(data.user_id);

        if(!user) {
            throw new Error("The finance could not be created because the user doesn't exist.");
        }

        const finance = await this.financesRepository.create(data);

        return finance;
    }
}