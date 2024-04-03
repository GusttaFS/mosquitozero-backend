import prismaClient from "../../prisma";


interface RequestVisitOrder {
    visit_order_id: string;
}


class GetVisitOrderService {
    async execute({ visit_order_id }: RequestVisitOrder) {
        const visitOrder = await prismaClient.visitOrder.findFirst({
            where: {
                id: visit_order_id
            },
        });
        return visitOrder;
    }
}

export { GetVisitOrderService };