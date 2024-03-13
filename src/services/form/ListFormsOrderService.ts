import prismaClient from "../../prisma";


interface FormRequest {
    order_id: string;
}


class ListFormsOrderService {
    async execute({ order_id }: FormRequest) {
        const forms = await prismaClient.form.findMany({
            where: {
                order_id: order_id,
            }
        });
        return forms;
    }
}

export { ListFormsOrderService };