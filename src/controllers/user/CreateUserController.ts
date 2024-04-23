import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';
import { validateType } from '../../validators/validateType';


class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, name, type, data } = req.body;

        validateField(email, 'email');
        validateField(password, 'password');
        validateField(name, 'name');
        validateType(type);
        validateData(data);

        const createUserService = new CreateUserService;
        const user = await createUserService.execute({
            email,
            password,
            name,
            type,
            data
        });

        return res.status(201).json(user);
    };
};

export { CreateUserController };