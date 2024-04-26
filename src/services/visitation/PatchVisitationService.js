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
exports.PatchVisitationService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class PatchVisitationService {
    execute({ visitation_id, visitation_area_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitationArea = yield prisma_1.default.visitationArea.findFirst({
                where: {
                    id: visitation_area_id
                }
            });
            const visitation = yield prisma_1.default.visitation.findFirst({
                where: {
                    id: visitation_id
                }
            });
            if (visitationArea && !visitation.is_completed) {
                const newCompletedVisitations = (visitationArea.completed_visitations + 1);
                yield prisma_1.default.visitationArea.update({
                    where: {
                        id: visitation_area_id
                    },
                    data: {
                        completed_visitations: newCompletedVisitations,
                        updated_at: new Date()
                    }
                });
            }
            if (visitationArea && visitation.is_completed) {
                const newCompletedVisitations = (visitationArea.completed_visitations - 1);
                yield prisma_1.default.visitationArea.update({
                    where: {
                        id: visitation_area_id
                    },
                    data: {
                        completed_visitations: newCompletedVisitations,
                        updated_at: new Date()
                    }
                });
            }
            const visitationUpdated = yield prisma_1.default.visitation.update({
                where: {
                    id: visitation_id,
                    visitation_area_id: visitation_area_id
                }, data: {
                    is_completed: !visitation.is_completed,
                    updated_at: new Date()
                }, select: {
                    id: true,
                    visitation_area_id: true,
                    is_completed: true,
                    created_at: true,
                    updated_at: true,
                }
            });
            return visitationUpdated;
        });
    }
}
exports.PatchVisitationService = PatchVisitationService;
