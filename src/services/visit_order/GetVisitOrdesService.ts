import prismaClient from "../../prisma";


interface RequestVisitOrder {
    user_id: string;
}


class GetVisitOrdesService {
    async execute({ user_id }: RequestVisitOrder) {
        const visitOrders = await prismaClient.visitOrder.findMany({
            where: {
                user_id: user_id
            }
        });

        return visitOrders;
    }
}

export { GetVisitOrdesService };