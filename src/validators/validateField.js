"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateField = void 0;
function validateField(field, nameField) {
    if (!field) {
        throw new Error(`${nameField} is not set`);
    }
    if (field.trim() === "") {
        throw new Error(`${nameField} can't be empty`);
    }
}
exports.validateField = validateField;
