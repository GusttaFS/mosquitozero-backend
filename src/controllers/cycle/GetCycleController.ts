import { Request, Response } from 'express';
import { GetCycleService } from '../../services/cycle/GetCycleService';
import { validateField } from '../../validators/validateField';


class GetCycleController {
    async handle(req: Request, res: Response) {
        const cycle_id = req.headers.cycle_id as string;

        validateField(cycle_id, 'id');

        const getCycleService = new GetCycleService();
        const cycle = await getCycleService.execute(cycle_id);

        if (!cycle) {
            throw new Error('cycle does not exist');
        }
        
        return res.json(cycle);
    }
}

export { GetCycleController };