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
exports.GetVisitationController = void 0;
const GetVisitationService_1 = require("../../services/visitation/GetVisitationService");
const validateField_1 = require("../../validators/validateField");
class GetVisitationController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitation_id = req.headers.visitation_id;
            (0, validateField_1.validateField)(visitation_id, 'visitation id');
            const getVisitationService = new GetVisitationService_1.GetVisitationService();
            const visitation = yield getVisitationService.execute(visitation_id);
            if (!visitation) {
                throw new Error('Visitation does not exist');
            }
            ;
            return res.json(visitation);
        });
    }
}
exports.GetVisitationController = GetVisitationController;
