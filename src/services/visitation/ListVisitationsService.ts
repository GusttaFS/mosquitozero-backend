import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_area_id: string;
}


class ListVisitationsService {
    async execute({ visitation_area_id }: VisitationRequest) {
        const visitations = await prismaClient.visitation.findMany({
            where: {
                visitation_area_id: visitation_area_id
            },
            orderBy: {
                created_at: 'desc'
            },
            select: {
                id: true,
                data: true,
                is_completed: true,
            }
        });

        return visitations;
    }
}

export { ListVisitationsService };