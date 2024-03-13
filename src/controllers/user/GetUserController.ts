import { Request, Response } from 'express';
import { GetUserService } from '../../services/user/GetUserService';
import { validateId } from '../../validators/validateId';


class GetUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        validateId(user_id);
        
        const getUserService = new GetUserService();
        const user = await getUserService.execute(user_id);
        return res.json(user);
    }
}

export { GetUserController };