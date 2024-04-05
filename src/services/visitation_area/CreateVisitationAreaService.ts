import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface VisitationAreaRequest {
    user_id: string;
    cycle_id: string;
    data: JsonObject;
}


class CreateVisitationAreaService {
    async execute({ user_id, cycle_id, data }: VisitationAreaRequest) {
        const visitationArea = await prismaClient.visitationArea.create({
            data: {
                user_id: user_id,
                cycle_id: cycle_id,
                data: data
            }
        });

        return visitationArea;
    }
}

export { CreateVisitationAreaService };