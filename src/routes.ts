import { Router, Request, Response } from 'express';
import { CreateFormController } from './controllers/form/CreateFormController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { GetUserController } from './controllers/user/GetUserController';
import { UpdateUserDataController } from './controllers/user/UpdateUserDataController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { ListFormsOrderController } from './controllers/form/ListFormsOrderController';


const router = Router();

// ------------------- USER -------------------
router.post('/user', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/user', isAuthenticated, new GetUserController().handle);

router.patch('/user', isAuthenticated, new UpdateUserDataController().handle);


// ------------------ ORDER -------------------
router.post('/order', new CreateOrderController().handle);


// ------------------- FORM -------------------
router.post('/form', isAuthenticated, new CreateFormController().handle);

router.get('/forms/order', isAuthenticated, new ListFormsOrderController().handle);

export { router };