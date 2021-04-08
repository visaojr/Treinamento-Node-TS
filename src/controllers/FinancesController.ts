import { container } from "tsyringe";
import CreateFinanceService from "../services/finances/CreateFinanceService";
import { Response, Request } from "express";
import FindFinancesService from "../services/finances/FindFinancesService";
import DeleteFinanceService from '../services/finances/DeleteFinanceService';

export default class FinancesController {
  public async create(request: Request, response: Response) {
    const { user_id } = request.params;
    const { description, value } = request.body;

    const createFinance = container.resolve(CreateFinanceService);

    const finance = await createFinance.execute({
      user_id,
      description,
      value,
    });

    return response.status(201).json(finance);
  }

  public async find(request: Request, response: Response) {
    const { user_id } = request.params;

    const findFinances = container.resolve(FindFinancesService);

    const finances = await findFinances.execute(user_id);

    return response.status(200).json(finances);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    const deleteFinance = container.resolve(DeleteFinanceService);

    await deleteFinance.execute(id);

    return response.status(200);
  }
}
