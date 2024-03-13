import { Request, Response } from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';
import { validateEmail } from '../../validators/validateEmail';
import { validatePassword } from '../../validators/validatePassword';


class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        validateEmail(email);
        validatePassword(password);

        const authUserService = new AuthUserService();
        const user = await authUserService.execute({ email, password });
        return res.json(user);
    }
}

export { AuthUserController };