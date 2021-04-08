import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "../../models/User";

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;

  delete(id: string): Promise<void>;

  index(): Promise<User[] | undefined>;

  update(user: User): Promise<void>;

  findByEmail(email: string): Promise<User | undefined>;

  findByID(id: string): Promise<User | undefined>;
}
