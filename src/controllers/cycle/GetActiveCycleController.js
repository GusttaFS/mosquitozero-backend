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
exports.GetActiveCycleController = void 0;
const GetActiveCycleService_1 = require("../../services/cycle/GetActiveCycleService");
class GetActiveCycleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getActiveCycleService = new GetActiveCycleService_1.GetActiveCycleService();
            const cycle = yield getActiveCycleService.execute();
            if (!cycle) {
                throw new Error('no active cycle found');
            }
            return res.json(cycle);
        });
    }
}
exports.GetActiveCycleController = GetActiveCycleController;
