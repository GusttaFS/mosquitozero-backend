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
exports.UpdateVisitationController = void 0;
const UpdateVisitationService_1 = require("../../services/visitation/UpdateVisitationService");
const validateData_1 = require("../../validators/validateData");
const validateField_1 = require("../../validators/validateField");
class UpdateVisitationController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitation_id = req.headers.visitation_id;
            const { data, deposito, amostra, tratamento } = req.body;
            (0, validateField_1.validateField)(visitation_id, 'visitation id');
            (0, validateData_1.validateData)(data);
            (0, validateData_1.validateData)(deposito);
            (0, validateData_1.validateData)(amostra);
            (0, validateData_1.validateData)(tratamento);
            const updateVisitationService = new UpdateVisitationService_1.UpdateVisitationService();
            const visitation = yield updateVisitationService.execute({
                visitation_id,
                data,
                deposito,
                amostra,
                tratamento
            });
            if (!visitation) {
                throw new Error('Visitation does not exist');
            }
            ;
            return res.json(visitation);
        });
    }
}
exports.UpdateVisitationController = UpdateVisitationController;
