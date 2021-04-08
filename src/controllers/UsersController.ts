import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "../services/users/CreateUserService";
import DeleteUserService from "../services/users/DeleteUserService";
import FindAllUsersService from "../services/users/FindAllUsersService";
import FindUserService from "../services/users/FindUserService";
import UpdateUserService from '../services/users/UpdateUserService';

export default class UsersController {
  public async create(request: Request, response: Response) {
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(request.body);

    return response.status(201).json(user);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute(id);

    return response.status(200).json({
      status: 200,
      message: "Usuário excluído com sucesso.",
    });
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const findUser = container.resolve(FindUserService);

    const user = await findUser.execute(id);

    return response.status(200).json(user);
  }

  public async findAll(request: Request, response: Response) {
    const findAllUsers = container.resolve(FindAllUsersService);

    const users = await findAllUsers.execute();

    return response.status(200).json(users);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    
    const createUser = container.resolve(UpdateUserService);

    const user = await createUser.execute(id, request.body);

    return response.status(200).json(user);
  }
}
