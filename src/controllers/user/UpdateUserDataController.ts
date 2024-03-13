import { Request, Response } from 'express';
import { UpdateUserDataService } from '../../services/user/UpdateUserDataService';
import { validateData } from '../../validators/validateData';


class UpdateUserDataController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id as string;
        const { data } = req.body;
        validateData(data);
        
        const updateUserDataService = new UpdateUserDataService();
        const user = await updateUserDataService.execute({ user_id, data });
        return res.json(user);
    }
}

export { UpdateUserDataController };