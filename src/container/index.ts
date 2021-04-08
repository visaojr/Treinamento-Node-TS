import { container } from "tsyringe";

import IUsersRepository from "../repositories/interfaces/IUsersRepository";
import UsersRepository from "../repositories/UsersRepository";

import IFinancesRepository from "../repositories/interfaces/IFinancesRepository";
import FinancesRepository from "../repositories/FinancesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IFinancesRepository>(
  "FinancesRepository",
  FinancesRepository
);
