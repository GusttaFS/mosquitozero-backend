import { Router, Request, Response } from 'express';
import { CreateFormController } from './controllers/form/CreateFormController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { GetUserController } from './controllers/user/GetUserController';


const router = Router();

// ------------------- USER -------------------
router.post('/user', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/user', isAuthenticated, new GetUserController().handle);


// ------------------- FORM -------------------
router.post('/form', isAuthenticated, new CreateFormController().handle);


export { router };