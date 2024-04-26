"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const GetAuthUserController_1 = require("./controllers/user/GetAuthUserController");
const GetUserController_1 = require("./controllers/user/GetUserController");
const ListAgenteUsersController_1 = require("./controllers/user/ListAgenteUsersController");
const CreateCycleController_1 = require("./controllers/cycle/CreateCycleController");
const GetActiveCycleController_1 = require("./controllers/cycle/GetActiveCycleController");
const GetCycleController_1 = require("./controllers/cycle/GetCycleController");
const ListNoActiveCyclesController_1 = require("./controllers/cycle/ListNoActiveCyclesController");
const CreateVisitationAreaController_1 = require("./controllers/visitation_area/CreateVisitationAreaController");
const GetVisitationAreaController_1 = require("./controllers/visitation_area/GetVisitationAreaController");
const ListVisitationAreasCycleController_1 = require("./controllers/visitation_area/ListVisitationAreasCycleController");
const CreateVisitationController_1 = require("./controllers/visitation/CreateVisitationController");
const UpdateVisitationController_1 = require("./controllers/visitation/UpdateVisitationController");
const GetVisitationController_1 = require("./controllers/visitation/GetVisitationController");
const ListVisitationsController_1 = require("./controllers/visitation/ListVisitationsController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const PatchVisitationController_1 = require("./controllers/visitation/PatchVisitationController");
const router = (0, express_1.Router)();
exports.router = router;
// // ------------------ USER -------------------
router.post('/user', new CreateUserController_1.CreateUserController().handle);
router.post('/login', new AuthUserController_1.AuthUserController().handle);
router.get('/users', isAuthenticated_1.isAuthenticated, new ListAgenteUsersController_1.ListAgenteUsersController().handle);
router.get('/user', isAuthenticated_1.isAuthenticated, new GetAuthUserController_1.GetAuthUserController().handle);
router.get('/user/id', isAuthenticated_1.isAuthenticated, new GetUserController_1.GetUserController().handle);
// ------------------ CYCLE -------------------
router.post('/cycle', isAuthenticated_1.isAuthenticated, new CreateCycleController_1.CreateCycleController().handle);
router.get('/cycle', isAuthenticated_1.isAuthenticated, new GetActiveCycleController_1.GetActiveCycleController().handle);
router.get('/cycle/id', isAuthenticated_1.isAuthenticated, new GetCycleController_1.GetCycleController().handle);
router.get('/cycles', isAuthenticated_1.isAuthenticated, new ListNoActiveCyclesController_1.ListNoActiveCyclesController().handle);
// ------------------ VISITATION AREA -------------------
router.post('/visitation-area', isAuthenticated_1.isAuthenticated, new CreateVisitationAreaController_1.CreateVisitationAreaController().handle);
router.get('/visitation-area', isAuthenticated_1.isAuthenticated, new GetVisitationAreaController_1.GetVisitationAreaController().handle);
router.get('/visitation-areas', isAuthenticated_1.isAuthenticated, new ListVisitationAreasCycleController_1.ListVisitationAreasCycleController().handle);
// ------------------ VISITATION -------------------
router.post('/visitation', isAuthenticated_1.isAuthenticated, new CreateVisitationController_1.CreateVisitationController().handle);
router.put('/visitation', isAuthenticated_1.isAuthenticated, new UpdateVisitationController_1.UpdateVisitationController().handle);
router.patch('/visitation', isAuthenticated_1.isAuthenticated, new PatchVisitationController_1.PatchVisitationController().handle);
router.get('/visitation', isAuthenticated_1.isAuthenticated, new GetVisitationController_1.GetVisitationController().handle);
router.get('/visitations', isAuthenticated_1.isAuthenticated, new ListVisitationsController_1.ListVisitationsController().handle);
