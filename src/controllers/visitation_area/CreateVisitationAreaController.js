"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisitationAreaController = void 0;
const CreateVisitationAreaService_1 = require("../../services/visitation_area/CreateVisitationAreaService");
const validateData_1 = require("../../validators/validateData");
const validateField_1 = require("../../validators/validateField");
class CreateVisitationAreaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.headers.user_id;
            const cycle_id = req.headers.cycle_id;
            const { data } = req.body;
            (0, validateField_1.validateField)(user_id, 'user id');
            (0, validateField_1.validateField)(cycle_id, 'cycle id');
            (0, validateData_1.validateData)(data);
            const createVisitationAreaService = new CreateVisitationAreaService_1.CreateVisitationAreaService();
            const visitationArea = yield createVisitationAreaService.execute({
                user_id,
                cycle_id,
                data
            });
            return res.status(201).json(visitationArea);
        });
    }
}
exports.CreateVisitationAreaController = CreateVisitationAreaController;
