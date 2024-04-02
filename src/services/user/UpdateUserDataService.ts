import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface UserRequest {
    user_id: string;
    name: string;
    data: JsonObject;
}


class UpdateUserDataService {
    async execute({ user_id, name, data }: UserRequest) {
        const user = await prismaClient.user.update({
            where: {
                id: user_id,
            },
            data: {
                name: name,
                data: data,
            },
            select: {
                id: true,
                email: true,
                name: true,
                data: true,
                updated_at: true,
            }
        });
        return user;
    }
}

export { UpdateUserDataService };