import { getRepository, Repository } from "typeorm";
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';
import IUsersRepository from "./interfaces/IUsersRepository";

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findByID(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async index(): Promise<User[] | undefined> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async update(user: User): Promise<void> {
    await this.ormRepository.save(user);
  }
}
