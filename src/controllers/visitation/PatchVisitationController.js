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
exports.PatchVisitationController = void 0;
const PatchVisitationService_1 = require("../../services/visitation/PatchVisitationService");
const validateField_1 = require("../../validators/validateField");
class PatchVisitationController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitation_id = req.headers.visitation_id;
            const visitation_area_id = req.headers.visitation_area_id;
            (0, validateField_1.validateField)(visitation_id, 'visitation id');
            (0, validateField_1.validateField)(visitation_area_id, 'visitation area id');
            const patchVisitationService = new PatchVisitationService_1.PatchVisitationService();
            const visitation = yield patchVisitationService.execute({
                visitation_id,
                visitation_area_id
            });
            return res.json(visitation);
        });
    }
}
exports.PatchVisitationController = PatchVisitationController;
