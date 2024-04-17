import { Request, Response } from 'express';
import { GetActiveCycleService } from '../../services/cycle/GetActiveCycleService';


class GetActiveCycleController {
    async handle(req: Request, res: Response) {

        const getActiveCycleService = new GetActiveCycleService();
        const cycle = await getActiveCycleService.execute();

        if (!cycle) {
            throw new Error('no active cycle found');
        }
        
        return res.json(cycle);
    }
}

export { GetActiveCycleController };