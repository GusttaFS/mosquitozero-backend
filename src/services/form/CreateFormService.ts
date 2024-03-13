import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface FormRequest {
    data: JsonObject;
};


class CreateFormService {
    async execute({ data }: FormRequest) {
        const form = await prismaClient.form.create({
            data: {
                data: data
            },
        });
        return form;
    };
};

export { CreateFormService };