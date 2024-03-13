import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, data } = req.body;
        const createUserService = new CreateUserService;
        const user = await createUserService.execute({ email, password, data });
        return res.json(user);
    };
};

export { CreateUserController };