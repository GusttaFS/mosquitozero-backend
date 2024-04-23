import { JsonObject } from "@prisma/client/runtime/library";
import { hash } from "bcryptjs";
import prismaClient from "../../prisma";


interface UserRequest {
    email: string;
    password: string;
    name: string;
    type: string;
    data: JsonObject;
};


class CreateUserService {
    async execute({ email, password, name, type, data }: UserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if (user) {
            throw new Error(`User with email ${email} already exists`)
        }

        const passwordHash = await hash(password, 8);
        const newUser = await prismaClient.user.create({
            data: {
                email: email,
                password: passwordHash,
                name: name,
                type: type,
                data: data
            }, 
            select: {
                id: true,
                email: true,
                name: true,
                type: true,
                data: true,
                created_at: true,
                updated_at: true
            }
        });

        return newUser;
    }
}

export { CreateUserService };