import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { GetUserController } from './controllers/user/GetUserController';
import { ListAgenteUsersController } from './controllers/user/ListAgenteUsersController';

import { CreateCycleController } from './controllers/cycle/CreateCycleController';
import { GetActiveCycleController } from './controllers/cycle/GetActiveCycleController';
import { ListNoActiveCyclesController } from './controllers/cycle/ListNoActiveCyclesController';

import { CreateVisitationAreaController } from './controllers/visitation_area/CreateVisitationAreaController';
import { GetVisitationAreaController } from './controllers/visitation_area/GetVisitationAreaController';
import { ListVisitationAreasCycleController } from './controllers/visitation_area/ListVisitationAreasCycleController';

import { CreateVisitationController } from './controllers/visitation/CreateVisitationController';
import { UpdateVisitationController } from './controllers/visitation/UpdateVisitationController';
import { GetVisitationController } from './controllers/visitation/GetVisitationController';
import { ListVisitationsController } from './controllers/visitation/ListVisitationsController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { PatchVisitationController } from './controllers/visitation/PatchVisitationController';


const router = Router();


// // ------------------ USER -------------------
router.post('/user', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/users', isAuthenticated, new ListAgenteUsersController().handle);

router.get('/user', isAuthenticated, new GetUserController().handle)


// ------------------ CYCLE -------------------
router.post('/cycle', isAuthenticated, new CreateCycleController().handle);

router.get('/cycle', isAuthenticated, new GetActiveCycleController().handle);

router.get('/cycles', isAuthenticated, new ListNoActiveCyclesController().handle);


// ------------------ VISITATION AREA -------------------
router.post('/visitation-area', isAuthenticated, new CreateVisitationAreaController().handle);

router.get('/visitation-area', isAuthenticated, new GetVisitationAreaController().handle);

router.get('/visitation-areas', isAuthenticated, new ListVisitationAreasCycleController().handle);


// ------------------ VISITATION -------------------
router.post('/visitation', isAuthenticated, new CreateVisitationController().handle);

router.put('/visitation', isAuthenticated, new UpdateVisitationController().handle);

router.patch('/visitation', isAuthenticated, new PatchVisitationController().handle);

router.get('/visitation', isAuthenticated, new GetVisitationController().handle);

router.get('/visitations', isAuthenticated, new ListVisitationsController().handle);


export { router };