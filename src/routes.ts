import { Router } from 'express';
import { CreateVisitationController } from './controllers/visitation/CreateVisitationController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { GetUserController } from './controllers/user/GetUserController';
import { UpdateUserDataController } from './controllers/user/UpdateUserDataController';
import { CreateVisitOrderController } from './controllers/visit_order/CreateVisitOrderController';
import { ListVisitationsOrderController } from './controllers/visitation/ListVisitationsOrderController';
import { UpdateVisitationController } from './controllers/visitation/UpdateVisitationController';


const router = Router();

// ------------------- USER -------------------
router.post('/user', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/user', isAuthenticated, new GetUserController().handle);

router.patch('/user', isAuthenticated, new UpdateUserDataController().handle);


// ------------------ VIST ORDER -------------------
router.post('/visit-order', new CreateVisitOrderController().handle);


// ------------------- VISITATION -------------------
router.post('/visitation', isAuthenticated, new CreateVisitationController().handle);

router.get('/visitations/visit-order', isAuthenticated, new ListVisitationsOrderController().handle);

router.patch('/visitation', isAuthenticated, new UpdateVisitationController().handle);


export { router };