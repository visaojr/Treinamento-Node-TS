import {Router} from 'express';

import financesRouter from './routes/finances';
import usersRouter from "./routes/users";

export const routes = Router();

routes.use('/users', usersRouter);
routes.use('/finances', financesRouter);

export default routes;