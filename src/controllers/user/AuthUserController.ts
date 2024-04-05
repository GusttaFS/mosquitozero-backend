import { Request, Response } from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';
import { validateField } from '../../validators/validateField';


class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        validateField(email, 'email');
        validateField(password, 'password')

        const authUserService = new AuthUserService();
        const user = await authUserService.execute({
            email,
            password
        });

        return res.json(user);
    }
}

export { AuthUserController };