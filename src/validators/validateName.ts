export function validateName(name: string) {
    if (!name) {
        throw new Error("name is not set");
    }
    if (name.trim() === "") {
        throw new Error("name can't be empty");
    }
}