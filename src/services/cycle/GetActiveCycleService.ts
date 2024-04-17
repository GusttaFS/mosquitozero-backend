import prismaClient from "../../prisma";


class GetActiveCycleService {
    async execute() {
        const cycle = await prismaClient.cycle.findFirst({
            where: {
                is_active: true
            }
        });

        return cycle;
    }
}

export { GetActiveCycleService };