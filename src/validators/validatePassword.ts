export function validatePassword(password: string) {
    if (!password) {
        throw new Error("password is not set");
    }
    if (password.trim() === "") {
        throw new Error("password can't be empty");
    }
}