import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';


class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, name, data, cargo } = req.body;

        validateField(email, 'email');
        validateField(password, 'password');
        validateField(name, 'name');
        validateData(data);
        validateField(cargo, 'cargo');

        const createUserService = new CreateUserService;
        const user = await createUserService.execute({
            email,
            password,
            name,
            data,
            cargo
        });

        return res.status(201).json(user);
    };
};

export { CreateUserController };