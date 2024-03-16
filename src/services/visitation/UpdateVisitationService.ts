import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_id: string;
    data: JsonObject;
}

class UpdateVisitationService {
    async execute({ visitation_id, data } : VisitationRequest) {
        const visitation = await prismaClient.visitation.update({
            where: {
                id: visitation_id,
            }, data: {
                data: data,
            }
        });

        return visitation;
    }
}

export { UpdateVisitationService };