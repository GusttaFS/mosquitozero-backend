import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visit_order_id: string;
    data: JsonObject;
}


class CreateVisitationService {
    async execute({ visit_order_id, data }: VisitationRequest) {
        const visitation = await prismaClient.visitation.create({
            data: {
                visit_order_id: visit_order_id,
                data: data,
            }
        });
        
        return visitation;
    }
}

export { CreateVisitationService };