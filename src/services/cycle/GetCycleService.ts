import prismaClient from "../../prisma";


class GetCycleService {
    async execute(cycle_id: string) {
        const cycle = await prismaClient.cycle.findFirst({
            where: {
                id: cycle_id
            }
        });

        return cycle;
    }
}

export { GetCycleService };