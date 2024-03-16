import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_id: string
}


class GetVisitationService {
    async execute({ visitation_id }: VisitationRequest) {
        const visitation = prismaClient.visitation.findFirst({
            where: {
                id: visitation_id
            }
        });

        return visitation;
    }
}

export { GetVisitationService };