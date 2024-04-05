import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';


class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, name, data } = req.body;

        validateField(email, 'email');
        validateField(password, 'password');
        validateField(name, 'name');
        validateData(data);

        const createUserService = new CreateUserService;
        const user = await createUserService.execute({
            email,
            password,
            name,
            data
        });

        return res.status(201).json(user);
    };
};

export { CreateUserController };