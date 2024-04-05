import prismaClient from "../../prisma";


class GetVisitationAreaService {
    async execute(visitation_area_id : string) {
        const visitationArea = await prismaClient.visitationArea.findFirst({
            where: {
                id: visitation_area_id
            }
        });

        return visitationArea;
    }
}

export { GetVisitationAreaService };