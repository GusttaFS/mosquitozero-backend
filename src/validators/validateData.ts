import { JsonObject } from "@prisma/client/runtime/library";

export function validateData(data: JsonObject) {
    if (!data) {
        throw new Error("data is not set");
    }
    if (Object.keys(data).length === 0) {
        throw new Error("data can't be empty");
    }
}