import { Request, Response } from 'express';
import { UpdateUserDataService } from '../../services/user/UpdateUserDataService';
import { validateData } from '../../validators/validateData';
import { validateId } from '../../validators/validateId';
import { validateName } from '../../validators/validateName';


class UpdateUserDataController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id as string;
        const { name, data } = req.body;

        validateId(user_id);
        validateName(name);
        validateData(data);

        const updateUserDataService = new UpdateUserDataService();
        const user = await updateUserDataService.execute({ user_id, name, data });
        return res.json(user);
    }
}

export { UpdateUserDataController };