export function validateId(id: string) {
    if (!id) {
        throw new Error("id is not set");
    }
    if (id.trim() === "") {
        throw new Error("id can't be empty");
    }
}