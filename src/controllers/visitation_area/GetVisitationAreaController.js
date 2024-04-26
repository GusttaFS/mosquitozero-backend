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
exports.GetVisitationAreaController = void 0;
const GetVisitationAreaService_1 = require("../../services/visitation_area/GetVisitationAreaService");
const validateField_1 = require("../../validators/validateField");
class GetVisitationAreaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitation_area_id = req.headers.visitation_area_id;
            (0, validateField_1.validateField)(visitation_area_id, 'visitation area id');
            const getVisitationAreaService = new GetVisitationAreaService_1.GetVisitationAreaService();
            const visitationArea = yield getVisitationAreaService.execute(visitation_area_id);
            if (!visitationArea) {
                throw new Error('Visitation area does not exist');
            }
            return res.json(visitationArea);
        });
    }
}
exports.GetVisitationAreaController = GetVisitationAreaController;
