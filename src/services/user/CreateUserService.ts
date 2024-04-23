import { JsonObject } from "@prisma/client/runtime/library";
import { hash } from "bcryptjs";
import prismaClient from "../../prisma";


interface UserRequest {
    email: string;
    password: string;
    name: string;
    data: JsonObject;
    cargo: string;
};


class CreateUserService {
    async execute({ email, password, name, data, cargo }: UserRequest) {
        const passwordHash = await hash(password, 8);
        
        const form = await prismaClient.user.create({
            data: {
                email: email,
                password: passwordHash,
                name: name,
                data: data,
                cargo: cargo
            },
            select: {
                id: true,
                email: true,
                name: true,
                data: true,
                created_at: true,
                updated_at: true
            }
        });
        
        return form;
    }
}

export { CreateUserService };