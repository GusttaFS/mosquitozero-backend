"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
function validateData(data) {
    if (!data) {
        throw new Error("data is not set");
    }
    if (Object.keys(data).length === 0) {
        throw new Error("data can't be empty");
    }
}
exports.validateData = validateData;
