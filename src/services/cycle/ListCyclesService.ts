import prismaClient from "../../prisma";


class ListCyclesService {
    async execute() {
        const cycles = await prismaClient.cycle.findMany();
        return cycles;
    }
}

export { ListCyclesService };