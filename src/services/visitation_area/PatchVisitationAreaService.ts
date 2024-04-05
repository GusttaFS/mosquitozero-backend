import prismaClient from "../../prisma";


interface VisitationAreaRequest {
    visitation_area_id: string;
}


class PatchVisitationAreaService {
    async execute({ visitation_area_id }: VisitationAreaRequest) {
        const visitationArea = await prismaClient.visitationArea.update({
            where: {
                id: visitation_area_id,
            }, 
            data: {
                is_completed: true,
                updated_at: new Date()
            }
        });

        return visitationArea;
    }
}

export { PatchVisitationAreaService };