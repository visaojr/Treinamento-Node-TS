import { Router } from 'express';
import FinancesController from '../../controllers/FinancesController';

const financesController = new FinancesController();
const financesRouter = Router();

financesRouter.post("/:user_id", financesController.create);
financesRouter.get("/:user_id", financesController.find);

export default financesRouter;