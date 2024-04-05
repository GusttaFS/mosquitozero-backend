import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface CycleRequest {
    data: JsonObject;
}


class CreateCycleService {
    async execute({ data }: CycleRequest) {
        const cycle = await prismaClient.cycle.create({
            data: {
                data: data
            }
        });

        return cycle;
    }
}

export { CreateCycleService };