import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';


interface AuthResquest {
    email: string;
    password: string;
}


class AuthUserService {
    async execute({ email, password }: AuthResquest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) { throw new Error("User or password incorrect"); }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) { throw new Error("User or password incorrect"); }

        const token = sign(
            {
                email: user.email,
                type: user.type
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );
        
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            type: user.type,
            token: token
        };
    };
};

export { AuthUserService };