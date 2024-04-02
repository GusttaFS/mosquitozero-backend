import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { validateEmail } from '../../validators/validateEmail';
import { validateData } from '../../validators/validateData';
import { validatePassword } from '../../validators/validatePassword';


class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, name, data } = req.body;

        validateEmail(email);
        validatePassword(password);
        validateData(data);

        const createUserService = new CreateUserService;
        const user = await createUserService.execute({ email, password, name, data });
        return res.status(201).json(user);
    };
};

export { CreateUserController };