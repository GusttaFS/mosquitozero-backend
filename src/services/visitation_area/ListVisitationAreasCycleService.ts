import prismaClient from "../../prisma";


interface VisitationAreaRequest {
    user_id: string;
    cycle_id: string;
}


class ListVisitationAreasCycleService {
    async execute({ user_id, cycle_id }: VisitationAreaRequest) {
        const visitationAreas = await prismaClient.visitationArea.findMany({
            where: {
                user_id: user_id,
                cycle_id: cycle_id
            }, 
            orderBy: {
                created_at: 'desc'
            }
        });

        return visitationAreas;
    }
}

export { ListVisitationAreasCycleService };