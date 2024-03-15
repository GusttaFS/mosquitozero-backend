import prismaClient from "../../prisma";


interface VisitationRequest {
    visit_order_id: string;
}


class ListVisitationsOrderService {
    async execute({ visit_order_id }: VisitationRequest) {
        const visitation = await prismaClient.visitation.findMany({
            where: {
                visit_order_id: visit_order_id,
            }
        });
        return visitation;
    }
}

export { ListVisitationsOrderService };