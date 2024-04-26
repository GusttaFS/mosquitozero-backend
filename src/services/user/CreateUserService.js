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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
;
class CreateUserService {
    execute({ email, password, name, type, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (user) {
                throw new Error(`User with email ${email} already exists`);
            }
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            const newUser = yield prisma_1.default.user.create({
                data: {
                    email: email,
                    password: passwordHash,
                    name: name,
                    type: type,
                    data: data
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    type: true,
                    data: true,
                    created_at: true,
                    updated_at: true
                }
            });
            return newUser;
        });
    }
}
exports.CreateUserService = CreateUserService;
