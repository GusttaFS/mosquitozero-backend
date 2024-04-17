import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface CycleRequest {
    data: JsonObject;
}


class CreateCycleService {
    async execute({ data }: CycleRequest) {
        const activeCycle = await prismaClient.cycle.findFirst({
            where: {
                is_active: true
            }
        });

        if (activeCycle) {
            await prismaClient.cycle.update({
                where: {
                    id: activeCycle.id
                },
                data: {
                    is_active: false,
                    updated_at: new Date()
                }
            });
        }

        const cycle = await prismaClient.cycle.create({
            data: {
                data: data
            }
        });

        return cycle;
    }
}

export { CreateCycleService };