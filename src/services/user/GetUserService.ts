import prismaClient from "../../prisma";


class GetUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                email: true,
                name: true,
                cargo: true,
                data: true,
                created_at: true,
                updated_at: true,
            }
        });

        return user;
    }
}

export { GetUserService };