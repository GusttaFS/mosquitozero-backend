import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface OrderRequest {
    user_id: string;
    data: JsonObject;
}


class CreateOrderService {
    async execute({ user_id, data }: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                user_id: user_id,
                data: data,
            }
        }); 

        return order;
    }
}

export { CreateOrderService };