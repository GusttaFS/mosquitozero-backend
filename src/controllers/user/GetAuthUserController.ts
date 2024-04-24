import { Request, Response } from 'express';
import { GetUserService } from '../../services/user/GetUserService';
import { validateField } from '../../validators/validateField';


class GetAuthUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id as string;

        validateField(user_id, 'id');

        const getUserService = new GetUserService();
        const user = await getUserService.execute(user_id);

        return res.json(user);
    }
}

export { GetAuthUserController };