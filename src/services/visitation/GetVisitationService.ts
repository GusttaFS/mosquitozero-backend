import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_id: string
}


class GetVisitationService {
    async execute({ visitation_id }: VisitationRequest) {
        const visitation = prismaClient.visitation.findFirst({
            where: {
                id: visitation_id
            },
            select: {
                id: true,
                data: true,
                created_at: true,
                updated_at: true,
                visit_order: true
            }
        });

        return visitation;
    }
}

export { GetVisitationService };