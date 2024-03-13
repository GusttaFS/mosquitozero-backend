import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface FormRequest {
    order_id: string;
    data: JsonObject;
}


class CreateFormService {
    async execute({ order_id, data }: FormRequest) {
        const form = await prismaClient.form.create({
            data: {
                order_id: order_id,
                data: data,
            }
        });
        
        return form;
    }
}

export { CreateFormService };