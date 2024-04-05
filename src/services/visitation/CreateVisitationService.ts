import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_area_id: string;
    data: JsonObject;
}


class CreateVisitationService {
    async execute({ visitation_area_id, data }: VisitationRequest) {
        const visitation = await prismaClient.visitation.create({
            data: {
                visitation_area_id: visitation_area_id,
                data: data
            }
        });

        return visitation;
    }
}

export { CreateVisitationService };