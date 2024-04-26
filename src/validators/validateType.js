"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateType = void 0;
function validateType(type) {
    if (!type) {
        throw new Error("type is not set");
    }
    if (type.trim() === "") {
        throw new Error("type can't be empty");
    }
    if (type !== "agente" && type !== "supervisor") {
        throw new Error("type can only be agente or supervisor");
    }
}
exports.validateType = validateType;
