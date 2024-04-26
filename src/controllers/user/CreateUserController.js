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
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
const validateData_1 = require("../../validators/validateData");
const validateField_1 = require("../../validators/validateField");
const validateType_1 = require("../../validators/validateType");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, name, type, data } = req.body;
            (0, validateField_1.validateField)(email, 'email');
            (0, validateField_1.validateField)(password, 'password');
            (0, validateField_1.validateField)(name, 'name');
            (0, validateType_1.validateType)(type);
            (0, validateData_1.validateData)(data);
            const createUserService = new CreateUserService_1.CreateUserService;
            const user = yield createUserService.execute({
                email,
                password,
                name,
                type,
                data
            });
            return res.status(201).json(user);
        });
    }
    ;
}
exports.CreateUserController = CreateUserController;
;
