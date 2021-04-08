import { inject, injectable } from "tsyringe";
import IFinancesRepository from '../../repositories/interfaces/IFinancesRepository';

@injectable()
export default class DeleteFinanceService {
    constructor(
        @inject("FinancesRepository")
        private financeRepository: IFinancesRepository
    ) {}

    public async execute(id: string): Promise<void> {
        const user = await this.financeRepository.findByUserID(id);

        if(!user) {
            throw new Error("User does not exist.");
        }

        await this.financeRepository.delete(id);
    }
}