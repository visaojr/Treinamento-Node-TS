import ICreateFinanceDTO from "../../dtos/ICreateFinanceDTO";
import Finance from "../../models/Finance";

export default interface IFinancesRepository {
  create(data: ICreateFinanceDTO): Promise<Finance>;

  delete(id: string): Promise<void>;

  findByID(id: string): Promise<Finance | undefined>;

  findByUserID(user_id: string): Promise<Finance[] | undefined>;
}
