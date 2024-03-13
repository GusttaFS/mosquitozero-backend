import { Router, Request, Response } from 'express';
import { CreateFormController } from './controllers/form/CreateFormController';

const router = Router();

router.get('/form', new CreateFormController().handle);

export { router };