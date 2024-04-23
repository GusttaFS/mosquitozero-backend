import prismaClient from "../../prisma";


class ListAgenteUsersService {
    async execute() {
        const users = await prismaClient.user.findMany({
            where: {
                type: 'agente'
            },
            select: {
                id: true,
                email: true,
                name: true
            }, 
            orderBy: {
                name: 'asc'
            }
        });

        return users;
    }
}

export { ListAgenteUsersService };