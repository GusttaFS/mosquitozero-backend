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
exports.ListVisitationAreasCycleController = void 0;
const ListVisitationAreasCycleService_1 = require("../../services/visitation_area/ListVisitationAreasCycleService");
const validateField_1 = require("../../validators/validateField");
class ListVisitationAreasCycleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.headers.user_id;
            const cycle_id = req.headers.cycle_id;
            (0, validateField_1.validateField)(user_id, 'user id');
            (0, validateField_1.validateField)(cycle_id, 'cycle id');
            const listVisitationAreasCycleService = new ListVisitationAreasCycleService_1.ListVisitationAreasCycleService();
            const visitationAreas = yield listVisitationAreasCycleService.execute({
                user_id,
                cycle_id
            });
            return res.json(visitationAreas);
        });
    }
}
exports.ListVisitationAreasCycleController = ListVisitationAreasCycleController;
