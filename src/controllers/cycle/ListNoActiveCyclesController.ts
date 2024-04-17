import { Request, Response } from 'express';
import { ListNoActiveCyclesService } from '../../services/cycle/ListNoActiveCyclesService';


class ListNoActiveCyclesController {
    async handle(req: Request, res: Response) {
        const listNoActiveCyclesService = new ListNoActiveCyclesService();
        const cycles = await listNoActiveCyclesService.execute();

        return res.json(cycles);
    }
}

export { ListNoActiveCyclesController };