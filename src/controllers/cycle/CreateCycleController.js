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
exports.CreateCycleController = void 0;
const CreateCycleService_1 = require("../../services/cycle/CreateCycleService");
const validateData_1 = require("../../validators/validateData");
class CreateCycleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = req.body;
            (0, validateData_1.validateData)(data);
            const createCycleService = new CreateCycleService_1.CreateCycleService();
            const cycle = yield createCycleService.execute({
                data
            });
            return res.status(201).json(cycle);
        });
    }
}
exports.CreateCycleController = CreateCycleController;
