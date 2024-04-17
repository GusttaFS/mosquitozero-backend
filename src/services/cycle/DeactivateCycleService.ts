import prismaClient from "../../prisma";


interface CycleRequest {
    cycle_id: string;
}


class DeactivateCycleService {
    async execute({ cycle_id }: CycleRequest) {
        const cycle = await prismaClient.cycle.update({
            where: {
                id: cycle_id,
            }, 
            data: {
                is_active: false,
                updated_at: new Date()
            }
        });

        return cycle;
    }
}

export { DeactivateCycleService };