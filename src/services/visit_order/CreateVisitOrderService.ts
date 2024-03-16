import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitOrderRequest {
    user_id: string;
    data: JsonObject;
}


class CreateVisitOrderService {
    async execute({ user_id, data }: VisitOrderRequest) {
        const visitOrder = await prismaClient.visitOrder.create({
            data: {
                user_id: user_id,
                data: data,
            }
        });

        return visitOrder;
    }
}

export { CreateVisitOrderService };