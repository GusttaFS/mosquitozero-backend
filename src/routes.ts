import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { GetUserController } from './controllers/user/GetUserController';
import { UpdateUserDataController } from './controllers/user/UpdateUserDataController';

import { CreateCycleController } from './controllers/cycle/CreateCycleController';
import { PatchCycleController } from './controllers/cycle/PatchCycleController';
import { GetCycleController } from './controllers/cycle/GetCycleController';
import { ListCyclesController } from './controllers/cycle/ListCyclesController';

import { CreateVisitationAreaController } from './controllers/visitation_area/CreateVisitationAreaController';
import { PatchVisitationAreaController } from './controllers/visitation_area/PatchVisitationAreaController';
import { GetVisitationAreaController } from './controllers/visitation_area/GetVisitationAreaController';
import { ListVisitationAreasCycleController } from './controllers/visitation_area/ListVisitationAreasCycleController';

import { CreateVisitationController } from './controllers/visitation/CreateVisitationController';
import { UpdateVisitationController } from './controllers/visitation/UpdateVisitationController';
import { GetVisitationController } from './controllers/visitation/GetVisitationController';
import { ListVisitationsController } from './controllers/visitation/ListVisitationsController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();


// // ------------------ USER -------------------
router.post('/user', new CreateUserController().handle);

router.patch('/user', isAuthenticated, new UpdateUserDataController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/user', isAuthenticated, new GetUserController().handle);



// ------------------ CYCLE -------------------
router.post('/cycle', new CreateCycleController().handle);

router.patch('cycle', isAuthenticated, new PatchCycleController().handle);

router.get('/cycle', isAuthenticated, new GetCycleController().handle);

router.get('/cycles', isAuthenticated, new ListCyclesController().handle);



// ------------------ VISITATION AREA -------------------
router.post('/visitation-area', new CreateVisitationAreaController().handle);

router.patch('/visitation-area', isAuthenticated, new PatchVisitationAreaController().handle);

router.get('/visitation-area', isAuthenticated, new GetVisitationAreaController().handle);

router.get('/visitation-areas', isAuthenticated, new ListVisitationAreasCycleController().handle);



// ------------------ VISITATION -------------------
router.post('/visitation', isAuthenticated, new CreateVisitationController().handle);

router.put('/visitation', isAuthenticated, new UpdateVisitationController().handle);

router.get('/visitation', isAuthenticated, new GetVisitationController().handle);

router.get('/visitations', isAuthenticated, new ListVisitationsController().handle);


export { router };