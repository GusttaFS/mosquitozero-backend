import { Request, Response } from 'express';
import { ListAgenteUsersService } from '../../services/user/ListAgenteUsersService';


class ListAgenteUsersController {
    async handle(req: Request, res: Response) {
        const listAgenteUsersService = new ListAgenteUsersService();
        const users = await listAgenteUsersService.execute();
        
        return res.json(users);
    }
}

export { ListAgenteUsersController };