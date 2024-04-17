import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_area_id: string;
    data: JsonObject;
    deposito: JsonObject;
    amostra: JsonObject;
    tratamento: JsonObject;
}


class CreateVisitationService {
    async execute({ visitation_area_id, data, deposito, amostra, tratamento }: VisitationRequest) {

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
                data: data,
                deposito: deposito,
                amostra: amostra,
                tratamento: tratamento
            }
        });

        return visitation;
    }
}

export { CreateVisitationService };