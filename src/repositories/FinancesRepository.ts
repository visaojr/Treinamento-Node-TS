import { getRepository, Repository } from "typeorm";
import Finance from '../models/Finance';
import ICreateFinanceDTO from "../dtos/ICreateFinanceDTO";
import IFinancesRepository from "./interfaces/IFinancesRepository";

export default class FinancesRepository implements IFinancesRepository {
  private ormRepository: Repository<Finance>;

  constructor() {
    this.ormRepository = getRepository(Finance);
  }

  public async create(data: ICreateFinanceDTO): Promise<Finance> {
    const finance = this.ormRepository.create(data);

    await this.ormRepository.save(finance);

    return finance;
  }

  public async findByUserID(user_id: string): Promise<Finance[] | undefined> {
    const finances = await this.ormRepository.find({
      where: { user_id },
    });

    return finances;
  }

  public async findByID(id: string): Promise<Finance | undefined> {
    const finance = await this.ormRepository.findOne({
      where: { id },
    });

    return finance;
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}
