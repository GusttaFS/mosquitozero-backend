import prismaClient from "../../prisma";


interface RequestVisitOrder {
    user_id: string;
}


class GetVisitOrdersService {
    async execute({ user_id }: RequestVisitOrder) {
        const visitOrders = await prismaClient.visitOrder.findMany({
            where: {
                user_id: user_id
            }, 
            orderBy: {
                created_at: 'desc'
            }
        });

        return visitOrders;
    }
}

export { GetVisitOrdersService };