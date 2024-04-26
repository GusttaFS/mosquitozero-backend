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
exports.GetCycleController = void 0;
const GetCycleController_1 = require("../../services/cycle/GetCycleController");
const validateField_1 = require("../../validators/validateField");
class GetCycleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cycle_id = req.headers.cycle_id;
            (0, validateField_1.validateField)(cycle_id, 'cycle id');
            const getCycleService = new GetCycleController_1.GetCycleService();
            const cycle = yield getCycleService.execute(cycle_id);
            if (!cycle) {
                throw new Error('no cycle found');
            }
            return res.json(cycle);
        });
    }
}
exports.GetCycleController = GetCycleController;
