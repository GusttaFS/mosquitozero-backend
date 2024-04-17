import { Request, Response } from 'express';
import { DeactivateCycleService } from '../../services/cycle/DeactivateCycleService';
import { validateField } from '../../validators/validateField';


class DeactivateCycleController {
    async handle(req: Request, res: Response) {
        const cycle_id = req.headers.cycle_id as string;

        validateField(cycle_id, 'id');

        const deactivateCycleService = new DeactivateCycleService();
        const cycle = await deactivateCycleService.execute({
            cycle_id
        });

        if (!cycle) {
            throw new Error('Cycle does not exist');
        }

        return res.json(cycle);
    }
}

export { DeactivateCycleController };