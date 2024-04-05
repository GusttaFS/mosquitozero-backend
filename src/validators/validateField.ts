export function validateField(field: string, nameField: string) {
    if (!field) {
        throw new Error(`${nameField} is not set`);
    }
    if (field.trim() === "") {
        throw new Error(`${nameField} can't be empty`);
    }
}
