import { Router, Request, Response } from 'express';
import { CreateFormController } from './controllers/form/CreateFormController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// ------------------- USER -------------------
router.post('/user', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);


// ------------------- FORM -------------------
router.post('/form', new CreateFormController().handle);


export { router };