export function validateEmail(email: string) {
    if (!email) {
        throw new Error("email is not set");
    }
    if (email.trim() === "") {
        throw new Error("email can't be empty");
    }
}