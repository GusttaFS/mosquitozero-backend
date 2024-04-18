import prismaClient from "../../prisma";


interface VisitationRequest {
    visitation_area_id: string;
    visitation_id: string;
}


class PatchVisitationService {
    async execute({ visitation_id, visitation_area_id }: VisitationRequest) {
        const visitationArea = await prismaClient.visitationArea.findFirst({
            where: {
                id: visitation_area_id
            }
        });

        const visitation = await prismaClient.visitation.findFirst({
            where: {
                id: visitation_id
            }
        });

        if (visitationArea && !visitation.is_completed) {
            const newCompletedVisitations = (visitationArea.completed_visitations + 1);

            await prismaClient.visitationArea.update({
                where: {
                    id: visitation_area_id
                },
                data: {
                    completed_visitations: newCompletedVisitations,
                    updated_at: new Date()
                }
            });
        } 

        if (visitationArea && visitation.is_completed) {
            const newCompletedVisitations = (visitationArea.completed_visitations - 1);

            await prismaClient.visitationArea.update({
                where: {
                    id: visitation_area_id
                },
                data: {
                    completed_visitations: newCompletedVisitations,
                    updated_at: new Date()
                }
            });
        }

        const visitationUpdated = await prismaClient.visitation.update({
            where: {
                id: visitation_id,
                visitation_area_id: visitation_area_id
            }, data: {
                is_completed: !visitation.is_completed,
                updated_at: new Date()
            }, select: {
                id: true,
                visitation_area_id: true,
                is_completed: true,
                created_at: true,
                updated_at: true,
            }
        });

        return visitationUpdated;
    }
}

export { PatchVisitationService };