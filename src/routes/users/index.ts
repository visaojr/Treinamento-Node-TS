import UsersController from "../../controllers/UsersController";
import { Router } from "express";

const usersController = new UsersController();
const usersRouter = Router();

usersRouter.post('/', usersController.create);
usersRouter.delete('/:id', usersController.delete);
usersRouter.get('/:id', usersController.findOne);
usersRouter.get('/', usersController.findAll);
usersRouter.put('/:id', usersController.update);

export default usersRouter;