import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_id: string;
    data: JsonObject;
    deposito: JsonObject;
    amostra: JsonObject;
    tratamento: JsonObject;
}


class UpdateVisitationService {
    async execute({ visitation_id, data, deposito, amostra, tratamento }: VisitationRequest) {
        const visitation = await prismaClient.visitation.update({
            where: {
                id: visitation_id
            }, data: {
                data: data,
                deposito: deposito,
                amostra: amostra,
                tratamento: tratamento,
                updated_at: new Date()
            }
        });

        return visitation;
    }
}

export { UpdateVisitationService };