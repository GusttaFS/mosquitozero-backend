import prismaClient from "../../prisma";

class GetVisitationService {
    async execute(visitation_id : string) {
        const visitation = prismaClient.visitation.findFirst({
            where: {
                id: visitation_id
            }
        });

        return visitation;
    }
}

export { GetVisitationService };