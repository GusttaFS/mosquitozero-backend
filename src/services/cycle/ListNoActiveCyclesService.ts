import prismaClient from "../../prisma";


class ListNoActiveCyclesService {
    async execute() {
        const cycles = await prismaClient.cycle.findMany({
            where: {
                is_active: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return cycles;
    }
}

export { ListNoActiveCyclesService };