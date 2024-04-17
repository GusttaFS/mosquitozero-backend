import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_area_id: string;
    data: JsonObject;
}


class CreateVisitationService {
    async execute({ visitation_area_id, data }: VisitationRequest) {

        const visitationArea = await prismaClient.visitationArea.findFirst({
            where: {
                id: visitation_area_id
            }
        });

        if (visitationArea) {
            const newNumVisitations = (visitationArea.num_visitations + 1);

            await prismaClient.visitationArea.update({
                where: {
                    id: visitation_area_id
                },
                data: {
                    num_visitations: newNumVisitations,
                    updated_at: new Date()
                }
            });
        }

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