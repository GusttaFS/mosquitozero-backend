import { Request, Response } from 'express';
import { GetCycleService } from '../../services/cycle/GetCycleController';
import { validateField } from '../../validators/validateField';


class GetCycleController {
    async handle(req: Request, res: Response) {
        const cycle_id = req.headers.cycle_id as string;

        validateField(cycle_id, 'cycle id');

        const getCycleService = new GetCycleService();
        const cycle = await getCycleService.execute(cycle_id);

        if (!cycle) {
            throw new Error('no cycle found');
        }
        
        return res.json(cycle);
    }
}

export { GetCycleController };