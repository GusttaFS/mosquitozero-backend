import { JsonObject } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface UserRequest {
    user_id: string;
    data: JsonObject;
}


class UpdateUserDataService {
    async execute({ user_id, data }: UserRequest) {
        const user = await prismaClient.user.update({
            where: {
                id: user_id,
            },
            data: {
                data: data,
            },
            select: {
                id: true,
                email: true,
                data: true,
                updated_at: true,
            }
        });
        return user;
    }
}

export { UpdateUserDataService };