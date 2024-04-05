import { Request, Response } from 'express';
import { ListCyclesService } from '../../services/cycle/ListCyclesService';


class ListCyclesController {
    async handle(req: Request, res: Response) {
        const getCycleService = new ListCyclesService();
        const cycles = await getCycleService.execute();
        
        return res.json(cycles);
    }
}

export { ListCyclesController };